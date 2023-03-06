import { Router } from "express";
import { authCompany } from "../middlewares/authCompany.middleware";

const routes = Router();

import { createCompanyController } from "../controllers/companies/createCompany.controller";
import { listCompaniesController } from "../controllers/companies/listCompanies.controller";
import { companyLoginController } from "../controllers/companies/companyLogin.controller";
import { listOneCompanyController } from "../controllers/companies/listOneCompany.controller";
import { selfDeleteCompanyController } from "../controllers/companies/selfDeleteCompany.controller";
import { selfUpdateCompanyController } from "../controllers/companies/selfUpdateCompany.controller";

import { createProductController } from "../controllers/storage/createProduct.controller";
import { listProductsController } from "../controllers/storage/listProducts.controller";
import { updateProductController } from "../controllers/storage/updateProduct.controller";
import { deleteProductController } from "../controllers/storage/deleteProduct.controller";
import { listOneProductController } from "../controllers/storage/listOneProduct.controller";

routes.post("/company", createCompanyController);
routes.post("/company/login", companyLoginController);
routes.post("/storage", authCompany, createProductController);

routes.get("/companies", authCompany, listCompaniesController);
routes.get("/company", authCompany, listOneCompanyController);
routes.get("/storage", authCompany, listProductsController);
routes.get("/storage/:id", authCompany, listOneProductController);

routes.patch("/company", authCompany, selfUpdateCompanyController);
routes.patch("/storage/:id", authCompany, updateProductController);

routes.delete("/company", authCompany, selfDeleteCompanyController);
routes.delete("/storage/:id", authCompany, deleteProductController);

export default routes;
