import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UsersController } from '../controller/users.controller';
import { PrismaModule } from 'src/prisma_global/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService], //using
})
export class UsersModule {}
