import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storage.entity";

export const listOneProductService = async (id: string) => {
  const storageRepository = AppDataSource.getRepository(Storage);

  const product = await storageRepository.findOne({
    where: {
      id: id,
    },
  });

  return product;
};
