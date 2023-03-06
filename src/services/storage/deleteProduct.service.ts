import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storage.entity";

export const deleteProductService = async (id: string) => {
  const storageRepository = AppDataSource.getRepository(Storage);

  const product = await storageRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  await storageRepository.delete(product!.id);

  return true;
};
