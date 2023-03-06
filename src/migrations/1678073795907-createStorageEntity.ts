import { MigrationInterface, QueryRunner } from "typeorm";

export class createStorageEntity1678073795907 implements MigrationInterface {
    name = 'createStorageEntity1678073795907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" RENAME COLUMN "updated_at" TO "companyId"`);
        await queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "storage" ADD "companyId" uuid`);
        await queryRunner.query(`ALTER TABLE "storage" ADD CONSTRAINT "FK_845c96d32bddb0d41d98ce564ec" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" DROP CONSTRAINT "FK_845c96d32bddb0d41d98ce564ec"`);
        await queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "storage" ADD "companyId" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "storage" RENAME COLUMN "companyId" TO "updated_at"`);
    }

}
