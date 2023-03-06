import { AppDataSource } from "../../data-source";
import { IStorageUpdate } from "../../interfaces/storage";
import { Storage } from "../../entities/storage.entity";

export const updateProductService = async ({
  name,
  description,
  price,
  id,
}: IStorageUpdate) => {
  const storageRepository = AppDataSource.getRepository(Storage);

  const product = await storageRepository.findOne({
    where: {
      id: id,
    },
  });

  const productUpdated = {
    name: name ? name : product!.name,
    description: description ? description : product!.description,
    price: price ? price : product!.price,
  };

  await storageRepository.update(product!.id, productUpdated);

  return productUpdated;
};
