import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company.entity";
import { hash } from "bcrypt";
import { ICompanyUpdate } from "../../interfaces/companies";

export const selfUpdateCompanyService = async (
  companyName: string,
  { name, description, password }: ICompanyUpdate
) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companies = await companyRepository.find();

  const companyAccount = companies.find(
    (company) => company.name === companyName
  );

  if (!companyAccount) {
    throw new Error("You must login again, with the new credentials.");
  }

  const companyUpdated = {
    name: name ? name : companyAccount!.name,
    description: description ? description : companyAccount!.description,
    password: password ? await hash(password, 10) : companyAccount!.password,
  };

  await companyRepository.update(companyAccount!.id, companyUpdated);

  return companyUpdated;
};
