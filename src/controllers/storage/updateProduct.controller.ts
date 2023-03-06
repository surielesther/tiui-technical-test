import { Request, Response } from "express";
import { updateProductService } from "../../services/storage/updateProduct.service";
import { instanceToPlain } from "class-transformer";

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const { id } = req.params;

    if (req.body.id != undefined) {
      return res.status(401).json({
        error: "campo inválido",
        message: "Este campo não pode ser atualizado!",
      });
    }

    const product = await updateProductService({
      name,
      description,
      price,
      id,
    });

    return res.status(200).json({
      message: "Product updated successfully",
      product: instanceToPlain(product),
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
