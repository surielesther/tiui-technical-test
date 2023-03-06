import { Request, Response } from "express";
import { createCompanyService } from "../../services/companies/createCompany.service";
import { instanceToPlain } from "class-transformer";

export const createCompanyController = async (req: Request, res: Response) => {
  try {
    const { name, description, password } = req.body;

    const newCompany = await createCompanyService({
      name,
      description,
      password,
    });

    return res.status(201).send(instanceToPlain(newCompany));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
