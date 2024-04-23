"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1711449283931 = void 0;
class Users1711449283931 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            firstName VARCHAR(255) NOT NULL,
            lastName VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE, -- Add UNIQUE constraint here
            password VARCHAR(255) NOT NULL
        )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE user
        `);
    }
}
exports.Users1711449283931 = Users1711449283931;
//# sourceMappingURL=1711449283931-users.js.map