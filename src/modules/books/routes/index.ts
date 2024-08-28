import { Response, Request, Router } from "express"
import { schemaValidator } from "../../../middleware/schema.middleware"
import { bookSchemaCreate, bookSchemaUpdate } from "../schemas/book.schemas"
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/book.controller"
import { HttpResponse } from '../../../response/http.response';

const booksRouter = Router()

booksRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    getBookById(id, res);
})


booksRouter.get('/', async (_req, res: Response) => {
    getBooks(res);
})

booksRouter.post('/', schemaValidator(bookSchemaCreate), async (req: Request, res: Response) => {
    const body = req.body
    createBook(body, res)
})

booksRouter.patch('/:id', schemaValidator(bookSchemaUpdate), async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedBookData = req.body;
    updateBook(id, updatedBookData, res);
});

booksRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    deleteBook(id, res)
})


export { booksRouter }