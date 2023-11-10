import { MigrationInterface, QueryRunner } from "typeorm";

export class ObjetoMigration1699485686404 implements MigrationInterface {
    name = 'ObjetoMigration1699485686404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`objeto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`objeto\``);
    }

}
