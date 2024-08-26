import { IBook } from "../interface/book.interface";
import { BookModel } from "../model/book.model";


export const createBook = async (book: IBook) => {
    try {
        const newBook = new BookModel(book);
        return await newBook.save();
    } catch (error) {
        throw new Error("Error could not save in database");
    }
}