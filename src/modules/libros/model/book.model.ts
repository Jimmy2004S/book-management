import { model, Schema } from "mongoose";
import { IBook } from "../interface/book.interface";


const bookSchema = new Schema<IBook>({
    title: {
        type: String, required: true, unique: true
    },
    author: {
        type: String, required: true
    },
    publicationDate: {
        type: Date, required: true
    },
    isbn: {
        type: String, required: true, unique: true
    },
    genre: {
        type: String, required: true
    }
})

export const BookModel = model("books", bookSchema);