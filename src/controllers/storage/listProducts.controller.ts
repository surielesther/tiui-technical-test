import { Request, Response } from "express";
import { listProductsService } from "../../services/storage/listProducts.service";

export const listProductsController = async (req: Request, res: Response) => {
  try {
    const companyName = req.companyName;
    const product = await listProductsService(companyName);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
