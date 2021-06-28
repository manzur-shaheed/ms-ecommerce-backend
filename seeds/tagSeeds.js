// sample seed data for tags
const { Tag } = require('../models/Tag');

const sample_tags = [
    {
        tag_name: 'core',
    },
    {
        tag_name: 'edge',
    },
    {
        tag_name: 'node',
    }
];

// function to populate
const tagSeeds = () => Tag.bulkCreate(sample_tags);

// export
module.exports = seedTags;