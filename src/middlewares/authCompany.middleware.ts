import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authCompany = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        req.companyName = decoded.name;
        next();
      }
    );
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
