import { Request, Response } from "express";
import { deleteProductService } from "../../services/storage/deleteProduct.service";

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await deleteProductService(id);

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
