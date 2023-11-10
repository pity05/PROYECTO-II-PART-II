import { DataSource } from 'typeorm';
import { Objeto } from './Objeto.entity';
export declare const ObjetoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Objeto>;
    inject: string[];
}[];
