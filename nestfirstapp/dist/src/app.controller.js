"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const Objeto_service_1 = require("./Objeto/Objeto.service");
const Objeto_entity_1 = require("./Objeto/Objeto.entity");
const update_objeto_dto_1 = require("./Objeto/dto/update-objeto.dto");
const common_2 = require("@nestjs/common");
let AppController = class AppController {
    constructor(appService, objetoService) {
        this.appService = appService;
        this.objetoService = objetoService;
    }
    getHello() {
        return this.objetoService.findAll();
    }
    InsertData(datos) {
        return this.objetoService.create(datos);
    }
    getById(id) {
        return this.appService.getById(id);
    }
    update(id, updateobjeatoDto) {
        return this.objetoService.update(id, updateobjeatoDto);
    }
    async remove(id, res) {
        await this.objetoService.remove(id);
        res.json({ message: 'Objeto eliminado correctamente' });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Objeto_entity_1.Objeto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "InsertData", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AppController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_objeto_dto_1.UpdateObjetoDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "remove", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('Api'),
    __metadata("design:paramtypes", [app_service_1.AppService, Objeto_service_1.ObjetoService])
], AppController);
//# sourceMappingURL=app.controller.js.map