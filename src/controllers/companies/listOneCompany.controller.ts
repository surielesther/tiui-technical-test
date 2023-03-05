import { Request, Response } from "express";
import { listOneCompanyService } from "../../services/companies/listOneCompany.service";

export const listOneCompanyController = async (req: Request, res: Response) => {
  try {
    const company = await listOneCompanyService({
      authorization: req.headers.authorization,
    });

    return res.status(200).send(company);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
