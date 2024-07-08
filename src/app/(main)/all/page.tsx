/* eslint-disable react/jsx-key */
"use server";

import Transaction from "@/models/Transaction";
import connectMongo from "@/utils/connectMongo";

const AllTransaction = async () => {
  await connectMongo();
  const transactions = await Transaction.find({}).lean();

  return (
    <div className="mx-10">
      <h1 className="my-20 text-center">All transactions:</h1>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div className="flex justify-between items-center">
            <h1>{transaction.reason}:</h1>
            <h1>{transaction.amount}</h1>
          </div>
        ))
      ) : (
        <h1 className="text-center my-5">nothing to show</h1>
      )}
    </div>
  );
};

export default AllTransaction;
