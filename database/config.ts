import mongoose from "mongoose";

export const connectDB = async():Promise<void>=>{
    try {
        await mongoose.connect('mongodb+srv://nickswill2012:TISDUkZHmbzG7IAG@nickcluster01.vhnjalm.mongodb.net/')
        console.log('Base de datos conectada en Línea');
        
    } catch (error) {
        console.error(error)
        throw new Error('Error al conectarse a la base de datos')
    }
}