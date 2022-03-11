import * as mongoose from 'mongoose';
import { OrderSchema } from '../models/Models';

const Order = mongoose.model('Orders',OrderSchema);

const mongoUrl = "";
export class DataService {


    public static mongoSetup(): void {

        var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
        console.debug("Initiating MongoDb Connection");
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.debug("Initiated MongoDb Connection");
        mongoose.set('debug', true);
    }

    /*
    * Section for Location Services
    */
    public async createOrder(data: JSON) {
        let newOrder = new Order(data);
        //console.debug(newLocation);
        return await newOrder.save();
    }
    
}