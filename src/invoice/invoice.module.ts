import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceProviders } from './Invoice.Providers';
import { UserService } from 'src/User/User.services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InvoiceController],
  providers: [UserService, ...InvoiceProviders],
  exports: [...InvoiceProviders],
})
export class InvoiceModule {}
