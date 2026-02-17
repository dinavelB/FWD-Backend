import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //available globally
    }),
    PrismaModule,
  ], //bootstarp all modules
  controllers: [], //controllers
  providers: [], //services
})
export class AppModule {}
