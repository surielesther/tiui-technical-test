import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677956384738 implements MigrationInterface {
    name = 'createTables1677956384738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage" ("id" uuid NOT NULL, "name" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_f9b67a9921474d86492aad2e027" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "storage"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
