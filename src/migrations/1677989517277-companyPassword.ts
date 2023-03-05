import { MigrationInterface, QueryRunner } from "typeorm";

export class companyPassword1677989517277 implements MigrationInterface {
    name = 'companyPassword1677989517277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "password"`);
    }

}
