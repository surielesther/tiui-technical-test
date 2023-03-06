import { Request, Response } from "express";
import { selfUpdateCompanyService } from "../../services/companies/selfUpdateCompany.service";
import { instanceToPlain } from "class-transformer";

export const selfUpdateCompanyController = async (
  req: Request,
  res: Response
) => {
  try {
    const companyName = req.companyName;
    const { name, description, password } = req.body;

    if (req.body.id != undefined) {
      return res.status(401).json({
        error: "campo inválido",
        message: "Este campo não pode ser atualizado!",
      });
    }

    const company = await selfUpdateCompanyService(companyName, {
      name,
      description,
      password,
    });

    return res.status(200).json({
      message: "Company updated successfully",
      company: instanceToPlain(company),
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
