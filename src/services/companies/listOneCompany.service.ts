import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company.entity";
import { IListOneCompany } from "../../interfaces/companies";
import jwt from "jsonwebtoken";

export const listOneCompanyService = async ({
  authorization,
}: IListOneCompany) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companies = await companyRepository.find();

  if (!authorization) {
    throw new Error("No authorization token found");
  }

  const token = authorization;

  const companyAccount = jwt.verify(
    token,
    String(process.env.JWT_SECRET),
    (err, decoded) => {
      if (!decoded) {
        throw new Error("Invalid token");
      }
      const company = companies.find(
        (company) => company.name === (<any>decoded).name
      );
      return company;
    }
  );

  return companyAccount;
};
