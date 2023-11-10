"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetoProviders = void 0;
const Objeto_entity_1 = require("./Objeto.entity");
exports.ObjetoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(Objeto_entity_1.Objeto),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=Objeto.provider.js.map