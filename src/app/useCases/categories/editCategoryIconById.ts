import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function editCategoryIconById(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { icon } = req.body;

    await Category.findByIdAndUpdate(categoryId, { icon });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
