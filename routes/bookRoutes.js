// routes/bookRoutes.js

const express = require("express");
const {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
} = require("../controllers/bookController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, createBook); // Memastikan `createBook` adalah fungsi
router.get("/", auth, getAllBooks);  // Memastikan `getAllBooks` adalah fungsi
router.get("/:id", auth, getBookById); // Memastikan `getBookById` adalah fungsi
router.put("/:id", auth, updateBook); // Memastikan `updateBook` adalah fungsi
router.delete("/:id", auth, deleteBook); // Memastikan `deleteBook` adalah fungsi
console.log("Imported createBook:", createBook);

module.exports = router;
