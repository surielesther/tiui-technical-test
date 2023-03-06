import { Request, Response } from "express";
import { selfDeleteCompanyService } from "../../services/companies/selfDeleteCompany.service";

export const selfDeleteCompanyController = async (
  req: Request,
  res: Response
) => {
  try {
    const name = req.companyName;

    const company = await selfDeleteCompanyService(name);

    return res.status(200).json({ message: "Company deleted successfully" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
