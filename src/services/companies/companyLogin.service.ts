import { ICompanyLogin } from "../../interfaces/companies";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const companyLoginService = async ({
  name,
  password,
}: ICompanyLogin) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companies = await companyRepository.find();

  const company = companies.find((company) => company.name === name);

  if (!company) {
    throw new Error("Wrong name or password!");
  }
  if (!bcrypt.compareSync(password, company.password)) {
    throw new Error("Wrong name or password!");
  }

  const token = jwt.sign({ name: name }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });

  return token;
};
