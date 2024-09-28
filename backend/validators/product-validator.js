import {z} from "zod";

const productSchema =z.object({
    name:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chracter"})
    .max(300,{message:"Name must be not more than 300 chracter"}),
    description:z
    .string({required_error:"D is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chracter"})
    .max(300,{message:"Name must be not more than 300 chracter"}),
    price:z
    .string({required_error:"P is required"})
    .trim()
    .min(1,{message:"Name must be atleast 3 chracter"})
    .max(7,{message:"Name must be not more than 300 chracter"}),
    // stock:z
    // .number({required_error:"S is required",
    //     invalid_type_error:"Stock must be an number",})
    //     .default(1)
    // // .int({required_error:"Stock must be integer"})
    // .gte(1,{message:"Stock must be atleast 1 chracter"})
    // .lte(100,{message:"Stock must be not more than 100 chracter"}),
    // ratings:z
    // .number({required_error:"R is required",
    //     invalid_type_error:"Stock must be an number",})
    // .int({required_error:"Stock must be integer"})
    // .gte(1,{message:"Stock must be atleast 1 chracter"})
    // .lte(5,{message:"Stock must be not more than 100 chracter"}),
    category:z
    .string({required_error:"C is required"})
    .trim()
    .min(1,{message:"Name must be atleast 3 chracter"})
    .max(7,{message:"Name must be not more than 300 chracter"}),

});

export default productSchema;