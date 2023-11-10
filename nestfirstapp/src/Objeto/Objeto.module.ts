import { Module } from '@nestjs/common';
// import { DatabaseModule } from './DatabaseModule';
import { ObjetoProviders } from './Objeto.provider';
import { ObjetoService } from './Objeto.service';

@Module({
//   imports: [DatabaseModule ],
  providers: [
    ...ObjetoProviders,
    ObjetoService,
  ],
})
export class ObjetoModule {}