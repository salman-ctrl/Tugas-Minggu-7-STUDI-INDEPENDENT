    // controllers/bookController.js

    const Book = require("../models/Book");

    // Membuat Buku
    exports.createBook = async (req, res) => {
        try {
            const { title, author, code, year } = req.body;
            const newBook = new Book({ title, author, code, year });
            await newBook.save();
            res.status(201).json({ message: "Book created", book: newBook });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    // Mendapatkan semua buku
    exports.getAllBooks = async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Mendapatkan buku berdasarkan ID
    exports.getBookById = async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
            res.json(book);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Memperbarui Buku
    exports.updateBook = async (req, res) => {
        try {
            const { title, author, code, year } = req.body;
            const book = await Book.findByIdAndUpdate(req.params.id, { title, author, code, year }, { new: true });
            if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
            res.json({ message: "Buku telah di Update", book });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    // Menghapus Buku
    exports.deleteBook = async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
            res.json({ message: "Buku telah di hapus" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
