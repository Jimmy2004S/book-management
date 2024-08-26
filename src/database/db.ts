import mongoose  from "mongoose"

const initDatabase = async (uri: string) => {
    try{
        await mongoose.connect(uri);
        console.log("Database connected with success");
    }catch(e){
        console.log("Could not connect to database: " , e)
    }
}

export { initDatabase }