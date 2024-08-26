import { Document } from "mongoose"

export interface IBook extends Document {
    title: string;
    author: string;
    publicationDate: Date;
    isbn: string;
    genre: string;
}
