import { productSchema } from "@/lib/validator";
import { z } from "zod";

export type IProductInput =z.infer<typeof productSchema>

export type Data={
    products: IProductInput[],
    headerMenu:{
        name:string,
        href:string
    }[]
    carousels:{
        image:string,
        url:string,
        title:string,
        buttonCaption:string,
        isPablished:boolean
    }[]
}