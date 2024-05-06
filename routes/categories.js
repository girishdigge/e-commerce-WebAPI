const express = require('express');
const router = express.Router();
const { Categories } = require('../models/category');
router.get(`/`, async (req, res) => {
  const categoriesList = await Categories.find();
  if (!categoriesList) {
    res.status(500).json({ success: false });
  }
  res.send(categoriesList);
});
router.post(`/`, (req, res) => {
  const categories = new Categories({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });
  categories.save().then((createdCategories) => {
    res
      .status(201)
      .json(createdCategories)
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false,
        });
      });
  });
});

module.exports = router;
