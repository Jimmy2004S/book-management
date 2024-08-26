import { config } from "dotenv"

config();

export class DBParameters {
    static readonly DATABASE_NAME = process.env.DATABASE_NAME || "test";
    static readonly DATABASE_PORT = process.env.DATABASE_PORT || "27017"; // Puerto por defecto de MongoDB
    static readonly DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
}

export class AppParameters {
    static readonly APP_URL = process.env.APP_URL
        || `http://localhost`
}