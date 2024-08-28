import { isValidObjectId } from "mongoose";
import { IBook } from "../interface/book.interface";
import { BookModel } from "../model/book.model";
import { format } from 'date-fns';
import { Response } from "express"
import { HttpResponse } from "../../../response/http.response";
import { formatDate } from "../utils/methods";


export const createBook = async (book: IBook, res: Response) => {
    try {
        const newBook = new BookModel(book);
        const bookCreated = await newBook.save();

        let formmatedBook = {}

        if (bookCreated)
            formmatedBook = formatDate(bookCreated)
                if(formmatedBook)
                    HttpResponse.Created(res, formmatedBook)
        else
            HttpResponse.BadRequest(res, "No se pudo crear")
        
    } catch (e) {
        const error = e as Error;
        HttpResponse.Error(res, error)
    }
}

export const getBooks = async (res: Response) => {

    try {
        const books = await BookModel.find()

        let formattedBooks = {}

        if (!books)
            HttpResponse.NotFound(res, "No encontrado")
        else
            // Formatea la fecha de cada libro
            formattedBooks = books.map((book: IBook) => ({
                ...book.toObject(),
                publicationDate: format(book.publicationDate, 'yyyy-MM-dd') // Formato deseado
            }));
            if(formattedBooks)    
                HttpResponse.Ok(res, formattedBooks)

    } catch (e) {
        const error = e as Error;
        HttpResponse.Error(res, error)
    }
}

export const getBookById = async (id: string, res: Response) => {

    try {

        const book = await BookModel.findById(id);

        let formattedBook = {}

        if (!book)
            HttpResponse.NotFound(res, "Book not found");
        else
            formattedBook = formatDate(book)
            if (formattedBook)
                HttpResponse.Ok(res, formattedBook)

    } catch (e) {
        const error = e as Error;
        HttpResponse.Error(res, error)
    }
}

export const updateBook = async (id: string, updateData: Partial<IBook>, res: Response) => {
    try {

        if (!isValidObjectId(id)) {
            HttpResponse.BadRequest(res, "Invalid ID format");
        }

        const updated_Book = await BookModel.findByIdAndUpdate(id, updateData, { new: true });

        if (updated_Book)
            HttpResponse.Ok(res, updated_Book)
        else
            HttpResponse.NotFound(res, "No se pudo actualizar")

    } catch (e) {
        const error = e as Error;
        HttpResponse.Error(res, error)
    }
};

export const deleteBook = async (id: string, res: Response) => {

    try {

        if (!isValidObjectId(id)) {
            HttpResponse.BadRequest(res, "Invalid ID format");
        }
        const book = await BookModel.findByIdAndDelete(id);

        if (book)
            HttpResponse.NoContent(res)
        else
            HttpResponse.NotFound(res, "Book not found, could not delete");

    } catch (e) {
        const error = e as Error;
        HttpResponse.Error(res, error)
    }

}
