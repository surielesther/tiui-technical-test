import { Storage } from "../../entities/storage.entity";
import { Company } from "../../entities/company.entity";
import { AppDataSource } from "../../data-source";
import { IStorageCreate } from "../../interfaces/storage";

export const createProductService = async (
  { name, price, description }: IStorageCreate,
  companyName: string
) => {
  const storageRepository = AppDataSource.getRepository(Storage);

  const companyRepository = AppDataSource.getRepository(Company);
  const companyAccount = await companyRepository.findOne({
    where: {
      name: companyName,
    },
  });

  const product = new Storage();
  product.name = name;
  product.description = description;
  product.price = price;
  product.company = companyAccount;

  storageRepository.create(product);
  await storageRepository.save(product);

  return product;
};
