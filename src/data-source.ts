import { DataSource } from "typeorm";
import { Company } from "./entities/company.entity";
import { Storage } from "./entities/storage.entity";
import { initialMigration1678030868287 } from "./migrations/1678030868287-initialMigration";
import { createTables1678030890640 } from "./migrations/1678030890640-createTables";
import { createStorageEntity1678073795907 } from "./migrations/1678073795907-createStorageEntity";

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
    initialMigration1678030868287,
    createTables1678030890640,
    createStorageEntity1678073795907,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
