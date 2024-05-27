export class CreateInvoiceDto {
  invoiceTitle: String;
  invoiceDescription: String;
  invoiceItems: [
    {
      description: String;
      Items: String;
      Price: String;
      status: ['Paid', 'Pending'];
    },
  ];
  InvoiceTax: String;
  InvoiceTotal: String;
  InvoiceRenewalDate: Date;
  InvoiceInitialDate: Date;
}
