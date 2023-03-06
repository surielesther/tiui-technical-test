import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company.entity";

export const listProductsService = async (companyName: string) => {
  const companyRepository = AppDataSource.getRepository(Company);

  const companyAccount = await companyRepository.findOne({
    where: {
      name: companyName,
    },
  });

  const storageProducts = companyAccount.storage;

  return storageProducts;
};
