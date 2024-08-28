import { Response } from "express";

export enum HttpsStatus {
    SUCCESS =               200,
    CREATED =               201,
    NO_CONTENT =            204,
    BAD_REQUEST =           400,
    UNAUTHORIZED =          401,
    NOT_FOUND =             404,
    CONFLICT =              409,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse{
    static Ok(res: Response, data?: any): Response{
        return res.status(HttpsStatus.SUCCESS).json({
            status:     HttpsStatus.SUCCESS,
            statusmsg:  "Success",
            data:       data
        });
    }

    static Created(res: Response, data?: any): Response{
        return res.status(HttpsStatus.CREATED).json({
            status:     HttpsStatus.CREATED,
            statusmsg:  "Creado",
            data:       data
        });
    }

    static NoContent(res: Response): Response{
        return res.status(HttpsStatus.NO_CONTENT).json({});
    }

    static NotFound(res: Response, data?: any): Response{
        return res.status(HttpsStatus.NOT_FOUND).json({
            status:     HttpsStatus.NOT_FOUND,
            statusmsg:  "Not found",
            error:      data
        });
    }

    static BadRequest(res: Response, data?: any): Response{
        return res.status(HttpsStatus.BAD_REQUEST).json({
            status:     HttpsStatus.BAD_REQUEST,
            statusmsg:  "Bad request",
            error:      data
        });
    }

    static Error(res: Response, data?: any): Response{
        return res.status(HttpsStatus.INTERNAL_SERVER_ERROR).json({
            status:     HttpsStatus.INTERNAL_SERVER_ERROR,
            statusmsg:  "Internal Server Error",
            error:      data
        });
    }
    

}