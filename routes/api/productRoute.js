// imports
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Here endpoint is /api/products

// find all products, include corresponding category name
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        { 
          model: Category,
          attributes: ['category_name']
        },
        {
          model: Tag,          
          through: {
            model: ProductTag,
            attributes: []
          },
          attributes: ['tag_name']
        }      
      ]
    });
    // console.log(productData);
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one product, include corresponding Category and Tag
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { 
          model: Category,
          attributes: ['category_name']
        },
        {
          model: Tag,          
          through: {
            model: ProductTag,
            attributes: []
          },
          attributes: ['tag_name']
        }      
      ]
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id.' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
        // create entries in ProductTag table
        const tags = JSON.parse( req.body.tagIds );
        if (tags.length > 0) {
            const productTags = tags.map((tag_id) => {
                return {
                    product_id: product.id,
                    tag_id,
                };
        });
        return ProductTag.bulkCreate(productTags);
      }
      res.status(200).json(product);
    })
    .then((productTags) => res.status(200).json(productTags))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


// exports
module.exports = router;
