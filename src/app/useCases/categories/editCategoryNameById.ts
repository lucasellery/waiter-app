import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function editCategoryNameById(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    await Category.findByIdAndUpdate(categoryId, { name });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
