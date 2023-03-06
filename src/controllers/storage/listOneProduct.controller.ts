import { Request, Response } from "express";
import { listOneProductService } from "../../services/storage/listOneProduct.service";

export const listOneProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await listOneProductService(id);

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
