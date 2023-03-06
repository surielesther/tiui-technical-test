import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company.entity";

export const selfDeleteCompanyService = async (name: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companies = await companyRepository.find();

  const companyAccount = companies.find((company) => company.name === name);

  await companyRepository.delete(companyAccount!.id);

  return true;
};
