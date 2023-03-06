import { Request, Response } from "express";
import { createProductService } from "../../services/storage/createProduct.service";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const companyName = req.companyName;

    const newProduct = await createProductService(
      { name, price, description },
      companyName
    );

    return res.status(201).send(newProduct);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
