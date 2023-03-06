import { Company } from "../../entities/company.entity";
import { AppDataSource } from "../../data-source";

export const listCompaniesService = async () => {
  const companyRepository = AppDataSource.getRepository(Company);

  const companies = companyRepository.find();
  return companies;
};
