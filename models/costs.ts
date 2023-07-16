import { Model, Schema, model } from "mongoose";

export interface ICosts {
    dni: number,
    usuario: string,
    gasto: number,
    estado: boolean
}

const CostSchema = new Schema<ICosts>({
    dni: {
        type: 'Number',
        required: true,
        unique: true,
    },
    usuario: {
        type: 'String',
        required: true,
    },
    gasto: {
        type: 'Number',
        required: true
    },
    estado: {
        type: 'Boolean',
        required: true,
        default: true
    }
})

const Cost: Model<ICosts> = model<ICosts>("Cost", CostSchema)
export default Cost