import { Request, Response } from "express";
import Product from "../models/Product.model";

export const createProdcut = async (req: Request, res: Response) => {

    const product = await Product.create(req.body);
    res.json({data: product});
}