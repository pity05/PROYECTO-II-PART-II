"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const Objeto_module_1 = require("./Objeto/Objeto.module");
const typeorm_1 = require("@nestjs/typeorm");
const Objeto_entity_1 = require("./Objeto/Objeto.entity");
const Objeto_service_1 = require("./Objeto/Objeto.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Objeto_entity_1.Objeto]), typeorm_1.TypeOrmModule.forRoot({ type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'prsc0528',
                database: 'pity',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                migrationsRun: false,
                migrations: ['dist/**/migrations/*.js'],
                migrationsTableName: 'history', })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, Objeto_module_1.ObjetoModule, Objeto_service_1.ObjetoService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map