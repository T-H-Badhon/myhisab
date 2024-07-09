"use server";

import Transaction from "@/models/Transaction";
import connectMongo from "@/utils/connectMongo";
import { revalidatePath } from "next/cache";

export const addFunction = async (reason: string, amount: number) => {
  await connectMongo();

  await Transaction.create({ reason: reason, amount: amount });

  revalidatePath("/all");
};
