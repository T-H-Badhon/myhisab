import mongoose, { Model, Schema } from "mongoose";

export type TTransaction = {
  reason: string;
  amount: number;
};

const transactionSchema = new Schema<TTransaction>(
  {
    reason: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type TransactionModel = Model<TTransaction>;

const Transaction =
  (mongoose.models.Transaction as TransactionModel) ||
  mongoose.model<TTransaction, TransactionModel>(
    "Transaction",
    transactionSchema
  );

export default Transaction;
