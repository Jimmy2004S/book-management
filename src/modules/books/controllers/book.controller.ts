import { IBook } from "../interface/book.interface";
import { BookModel } from "../model/book.model";
import { format } from 'date-fns';


export const createBook = async (book: IBook) => {
    try {
        const newBook = new BookModel(book);
        return await newBook.save();
    } catch (error) {
        throw new Error("Error could not save in database");
    }
}

export const getBooks = async () => {
    
    try {
        const books = await BookModel.find()

        // Formatea la fecha de cada libro
        const formattedBooks = books.map((book: IBook) => ({
            ...book.toObject(),
            publicationDate: format(book.publicationDate, 'yyyy-MM-dd') // Formato deseado
        }));

        return formattedBooks;

    } catch (e) {
        const error = e as Error;
        throw new Error("Error could not get books: " + error.message);
    }
}