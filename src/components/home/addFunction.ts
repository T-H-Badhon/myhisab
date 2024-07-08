"use server";

import Transaction from "@/models/Transaction";
import connectMongo from "@/utils/connectMongo";

export const addFunction = async (reason: string, amount: number) => {
  await connectMongo();

  await Transaction.create({ reason: reason, amount: amount });
};
