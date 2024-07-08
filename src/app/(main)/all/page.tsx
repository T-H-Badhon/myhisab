/* eslint-disable react/jsx-key */

import Transaction from "@/models/Transaction";
import connectMongo from "@/utils/connectMongo";
import Link from "next/link";

const AllTransaction = async () => {
  await connectMongo();
  const transactions = await Transaction.find({});

  return (
    <div className="mx-10">
      <div className="mx-10 my-10 flex justify-between">
        <h1 className=" text-center">All transactions:</h1>
        <Link className="py-2 px-3 bg-slate-700 text-white" href={"/"}>
          Add
        </Link>
      </div>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div
            key={transaction.reason + transaction.amount}
            className="flex justify-between items-center"
          >
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
