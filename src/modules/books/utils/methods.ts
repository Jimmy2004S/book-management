
import { format } from 'date-fns';

export function formatDate(book: any){
    const formattedBook = {
        ...book.toObject(),
        publicationDate: format(book.publicationDate, 'yyyy-MM-dd')
    }

    return formattedBook
}