"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstinctRoleplayAPIModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cerberus_1 = require("@instinct-prj/cerberus");
const backend_rp_1 = require("@instinct-prj/backend-rp");
const backend_1 = require("@instinct-prj/backend");
let InstinctRoleplayAPIModule = class InstinctRoleplayAPIModule {
};
InstinctRoleplayAPIModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: backend_1.databaseHost,
                username: backend_1.databaseUser,
                password: backend_1.databasePass,
                database: backend_1.databaseName,
                entities: [...backend_1.databaseEntities, ...backend_rp_1.rpDatabaseEntities],
                synchronize: false,
            }),
            cerberus_1.CerberusModule,
            backend_1.InstinctModule,
            backend_rp_1.InstinctRPModule,
        ],
    })
], InstinctRoleplayAPIModule);
exports.InstinctRoleplayAPIModule = InstinctRoleplayAPIModule;
