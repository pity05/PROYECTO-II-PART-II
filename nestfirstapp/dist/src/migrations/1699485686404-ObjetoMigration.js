"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetoMigration1699485686404 = void 0;
class ObjetoMigration1699485686404 {
    constructor() {
        this.name = 'ObjetoMigration1699485686404';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`objeto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`objeto\``);
    }
}
exports.ObjetoMigration1699485686404 = ObjetoMigration1699485686404;
//# sourceMappingURL=1699485686404-ObjetoMigration.js.map