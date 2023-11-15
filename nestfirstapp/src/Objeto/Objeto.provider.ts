import { DataSource } from 'typeorm';
import { Objeto } from './Objeto.entity';

export const ObjetoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Objeto),
    inject: ['DATA_SOURCE'],
  },
];