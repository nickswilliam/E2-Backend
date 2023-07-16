import express, {Express} from 'express'
import { connectDB } from '../database/config';
import userRoutes from '../routes/costs'

export class Server {
    app: Express
    constructor(){
        this.app = express();
        this.connectToDB();
        this.middlewares();
        this.routes();

    }

    async connectToDB():Promise<void>{
        await connectDB();
    }

    middlewares(): void{
        this.app.use(express.json())
    }

    routes(): void{
        this.app.use('/users', userRoutes)
    }

    listen(): void{
        this.app.listen(8000, ()=>{
            console.log('Conectado al puerto 8000')
        })
    }
}