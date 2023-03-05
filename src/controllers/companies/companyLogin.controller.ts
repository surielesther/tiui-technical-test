import { Request, Response } from "express";
import { companyLoginService } from "../../services/companies/companyLogin.service";

export const companyLoginController = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const token = await companyLoginService({ name, password });

    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
