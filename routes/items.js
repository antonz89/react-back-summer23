const express = require('express')

const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem
} = require('../controllers/itemController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all item routes
router.use(requireAuth)

// GET all items
router.get('/', getItems)

// GET a single items
router.get('/:id', getItem)

// POST a new item
router.post('/', createItem)

// DELETE an item
router.delete('/:id', deleteItem)

// UPDATE an item
router.patch('/:id', updateItem)

module.exports = router