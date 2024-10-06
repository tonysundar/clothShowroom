import mongoose from "mongoose";


const prodcutSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        image:{
            type:Array,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        subCategory:{
            type:String,
            required:true
        },
        sizes:{
            type:Array,
            required:true
        },
        bestseller:{
            type:Boolean
        },
        date:{
            type:Number,
            required:true
        }

})


const productModel = mongoose.models.product || mongoose.model('product',prodcutSchema);

export default productModel