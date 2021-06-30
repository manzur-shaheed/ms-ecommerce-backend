// imports
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Here endpoint is /api/tags

// find all tags, include corresponding product name
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [
                {             
                    model: Product,          
                    through: {
                        model: ProductTag,
                        attributes: []
                    }
                } 
            ]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
    Tag.findOne(
      {
        where:{
          id: req.params.id
        },
        include: [
            {             
                model: Product,          
                through: {
                    model: ProductTag,
                    attributes: []
                }
            } 
        ]
      })
      .then(function (tagData) {
        if (!tagData) {
          res.status(404).json({ message: 'No category found with this id.'})
          return;
        }
        res.status(200).json(tagData)
      }) .catch(function (err) {
        res.status(500).json(err);
      }) 
});

router.post('/', async(req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(function (categoryData) {
    res.status(200).json(categoryData)
  }) .catch(function (err) {
    res.status(500).json(err);
  }) 
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (tagData) {
        if(!tagData) {
          res.status(404).json({ message: 'No category found with this id.'})
          return;
        }
        res.status(200).json(tagData);
      }) .catch (function(err) {
        res.status(500).json(err)
      })
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (tagData) {
        if (!tagData) {
          res.status(404).json({ message: 'No category found with this id.'})
          return;
        }
        res.status(200).json(tagData);
      })
      .catch(function (err) {
        res.status(500).json(err);
      })
});

module.exports = router;