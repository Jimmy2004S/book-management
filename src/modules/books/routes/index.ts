import { Router } from "express"
import { schemaValidator } from "../../../middleware/schema.middleware"
import {bookSchemaCreate } from "../schemas/book.schemas"
import { createBook } from "../controllers/book.controller"

const booksRouter = Router()

booksRouter.get('/', (_req, res) => {
    console.log('Url base')
    res.send('books')
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