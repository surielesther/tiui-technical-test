import { Company } from "../../entities/company.entity";
import { ICompanyCreate } from "../../interfaces/companies";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

export const createCompanyService = async ({
  name,
  description,
  password,
}: ICompanyCreate) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companies = await companyRepository.find();

  const companyAlreadyExists = companies.find(
    (company) => company.name === name
  );

  if (companyAlreadyExists) {
    throw new Error("This company is already registered!");
  }

  const company = new Company();
  company.name = name;
  company.description = description;
  company.password = bcrypt.hashSync(password, 10);

  companyRepository.create(company);
  await companyRepository.save(company);

  return company;
};
