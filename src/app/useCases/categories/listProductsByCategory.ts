import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
