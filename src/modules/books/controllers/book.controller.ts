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

export const getBookById = async (id: string) => {
    try{
        const book = await BookModel.findById(id);
        
        if(!book){
            throw new Error("Libro no encontrado");
        }

        const formattedBook = {
            ...book.toObject(),
            publicationDate: format(book.publicationDate, 'yyyy-MM-dd')
        }

        return formattedBook

    }catch(e){
        const error = e as Error;
        throw new Error(error.message)
    }
}

export const updateBook = async (id: string, updateData: Partial<IBook>) => {
    try {
        const updatedBook = await BookModel.findByIdAndUpdate(id, updateData, { new: true });
        return updatedBook;
    } catch (e) {
        const error = e as Error;
        throw new Error("Error updating book: " + error.message);
    }
};

export const deleteBook = async (id: string) => {
    try{
        const book = await BookModel.findByIdAndDelete(id);

        if(!book){
            throw new Error("Book not found")
        }

        return book

    }catch(e){
        const error = e as Error;
        throw new Error("Error updating book: " + error.message);
    }
}
