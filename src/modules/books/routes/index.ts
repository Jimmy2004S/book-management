import { Router } from "express"
import { schemaValidator } from "../../../middleware/schema.middleware"
import {bookSchemaCreate } from "../schemas/book.schemas"
import { createBook, getBooks } from "../controllers/book.controller"

const booksRouter = Router()

booksRouter.get('/', async (_req, res) => {
    try{

        const books = await getBooks();

        res.status(200).send({
            books: books
        })

    }catch(e){
        const error = e as Error;
        res.status(500).send({
            error: error.message
        });
    }
})

booksRouter.post('/', schemaValidator(bookSchemaCreate) , async (req, res) => {
    try{
        const body = req.body
        const newBook = await createBook(body)
        res.status(201).send({
            msg: "Libro agregado",
            book: newBook
        })
    }catch(e){
        res.status(500).send({
            msg: "Error"
        })
    }
})

booksRouter.patch('/', (_req, res) =>{
    console.log('Actualizar libro')
    res.send('Actualizado libro')
})

booksRouter.delete('/', (_req, res) =>{
    console.log('Borrar libro')
    res.send('Eliminado libro')
})


export { booksRouter }