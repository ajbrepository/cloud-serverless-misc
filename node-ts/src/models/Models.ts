import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    id: {
        type: String
    },
    desc: {
        type: String
    },
    value: {
        type: Number,
        default: 0
    },    
    created_date: {
        type: Date,
        default: Date.now
    }
});