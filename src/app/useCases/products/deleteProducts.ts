import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function deleteProducts(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    await Product.findOneAndDelete({ where: { id: productId } });

    return res.status(204).send();
  } catch (error) {
    console.log(error);

    return res.status(404).json({ message: 'Could not delete product' });
  }
}
