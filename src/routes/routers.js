const { Router } = require('express');
const router = Router();
const Management = require('../models/management');
const config = require('config');
router.get('/management', [], async (req, res) => {
  try {
    const { id, cardImg, fullName, position, linkId } = req.body;
  } catch (error) {
    res.status(500).json({ message: 'Something is wrong' });
  }
});

router.post('/subdivision', async (req, res) => {
  try {
    const { id, name, idMan } = req.body;
  } catch (error) {
    res.status(500).json({ message: 'Something is wrong' });
  }
});

module.exports = router;
