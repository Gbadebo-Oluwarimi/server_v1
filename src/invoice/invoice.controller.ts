import { Controller, Inject } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Model } from 'mongoose';
import { Invoice } from './Invoice.interface';

@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    @Inject('INVOICE_MODEL')
    private InvoiceModel: Model<Invoice>,
  ) {}
}
