import { config } from "dotenv"

config();

export class DBParameters {
    
    //Static atributes 
    static readonly DATABASE_NAME = process.env?.DATABASE_NAME || "test";
    static readonly DATABASE_PORT = process.env?.DATABASE_PORT || "test";
    static readonly DATABASE_HOST = process.env?.DATABASE_HOST || "test";
}

export class ServerParameters {
    static readonly SERVER_PORT = process.env?.PORT_SERVER || "8080";
}