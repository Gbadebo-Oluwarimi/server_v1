import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Schema({
  ClientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
    required: true,
  },
  invoiceTitle: { type: String, required: true },
  invoiceDescription: { type: String, required: true },
  invoiceItems: [
    {
      description: String,
      Items: String,
      Price: String,
      status: ['Paid', 'Pending'],
    },
  ],
  InvoiceTax: String,
  InvoiceTotal: String,
  InvoiceRenewalDate: Date,
  InvoiceInitialDate: Date,
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
});
