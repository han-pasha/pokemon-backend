import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthzModule } from './authz/authz.module';

@Module({
  // 
  imports: [AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
