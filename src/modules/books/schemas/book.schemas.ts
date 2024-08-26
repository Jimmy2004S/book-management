import Joi from "joi";

const title = Joi.string()
const author = Joi.string()
const Date = Joi.date()
const isbn = Joi.string()
const genre = Joi.string()


export const bookSchemaCreate = Joi.object({
    title: title.required(),
    author: author.required(),
    isbn: isbn.required(),
    genre: genre.required()
})