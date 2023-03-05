import { DataSource } from "typeorm";
import { Company } from "./entities/company.entity";
import { Storage } from "./entities/storage.entity";
import { initialMigration1677956279396 } from "./migrations/1677956279396-initialMigration";
import { createTables1677956384738 } from "./migrations/1677956384738-createTables";
import { update1677986892173 } from "./migrations/1677986892173-update";
import { updateTables1677986912726 } from "./migrations/1677986912726-updateTables";
import { companyPassword1677989517277 } from "./migrations/1677989517277-companyPassword";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: [Company, Storage],
  migrations: [
    initialMigration1677956279396,
    createTables1677956384738,
    update1677986892173,
    updateTables1677986912726,
    companyPassword1677989517277,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
