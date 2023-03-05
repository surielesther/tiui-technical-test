import { Router } from "express";

const routes = Router();

import { createCompanyController } from "../controllers/companies/createCompany.controller";
import { listCompaniesController } from "../controllers/companies/listCompanies.controller";
import { companyLoginController } from "../controllers/companies/companyLogin.controller";
import { listOneCompanyController } from "../controllers/companies/listOneCompany.controller";

routes.post("/company", createCompanyController);
routes.post("/company/login", companyLoginController);

routes.get("/companies", listCompaniesController);
routes.get("/company", listOneCompanyController);

export default routes;
