import { IProductInput } from "@/types";
import { Document, model, Schema, Model ,models } from "mongoose";

export interface IProduct extends Document, IProductInput {
    _id: string
    createAt: Date
    updateAt: Date
}

const productSchema = new Schema<IProduct>({
        name:{
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        images: {
            type: [String],
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        listPrice: {
            type: Number,
            required: true
        },
        countInStock: {
            type: Number,
            required: true
        },
        tags: {type: [String], default: ['new arrivals']},
        sizes: {type: [String],default: ['S', 'M', 'L',]},
        colors: { type: [String], default:['white', 'Red', 'Blue'] },
        avgRating: {
            type: Number,
            required: true,
            default: 0
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0
        },
        ratingDistribution: [
            {
                rating: { type: Number, required: true },
                count: { type: Number, required: true },
            },
        ],
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review',
                default: []
            }
        ],
        numSales: {
            type: Number,
            required: true,
            default: 0
        },
        isPublished: {
            type: Boolean,
            required: true,
            default: false
        }
        },
        {
            timestamps: true
        }
    )

const Product= (models.Product as Model<IProduct>) ||
 model<IProduct>('Product', productSchema)

export default Product