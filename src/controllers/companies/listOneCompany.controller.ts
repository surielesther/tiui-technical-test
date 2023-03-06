import { Request, Response } from "express";
import { listOneCompanyService } from "../../services/companies/listOneCompany.service";
import { instanceToPlain } from "class-transformer";

export const listOneCompanyController = async (req: Request, res: Response) => {
  try {
    const name = req.companyName;
    const company = await listOneCompanyService(name);

    return res.status(200).send(instanceToPlain(company));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
