"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_entity_1 = require("./users/users.entity");
const _1711449283931_users_1 = require("./migration/1711449283931-users");
const configuration = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tab',
    entities: [users_entity_1.User],
    migrations: [_1711449283931_users_1.Users1711449283931],
    synchronize: false,
    migrationsRun: true,
};
exports.default = configuration;
//# sourceMappingURL=configuration.js.map