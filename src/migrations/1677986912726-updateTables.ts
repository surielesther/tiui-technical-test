import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1677986912726 implements MigrationInterface {
    name = 'updateTables1677986912726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "storage" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "updated_at"`);
    }

}
