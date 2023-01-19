import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import config from './config/micro-orm.conf';

// https://wanago.io/2022/05/23/api-nestjs-mikroorm-postgresql/


@Module({
  imports: [
    MikroOrmModule.forRoot({
      // ...config,
      type: 'postgresql',
      clientUrl: 'postgresql://root:root@localhost:5432/test',
      autoLoadEntities: true,
      
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
