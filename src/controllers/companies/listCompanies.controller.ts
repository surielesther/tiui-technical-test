import { Request, Response } from "express";
import { listCompaniesService } from "../../services/companies/listCompanies.service";

export const listCompaniesController = async (req: Request, res: Response) => {
  try {
    const companies = await listCompaniesService();

    return res.status(200).send(companies);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
