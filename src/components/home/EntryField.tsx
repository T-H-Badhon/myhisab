"use client";

import { useRouter } from "next/navigation";
import { addFunction } from "./addFunction";

const EntryField = () => {
  const router = useRouter();
  const onSubmit = (e: any) => {
    e.preventDefault();
    const reason = e?.target.reason.value;
    const amount = Number(e.target.amount.value);
    addFunction(reason, amount);
    e.reset();
    router.push("/dashboard/all");
  };
  return (
    <div className="mx-5">
      <form onSubmit={onSubmit}>
        <h1>reason:</h1>
        <input className="border-2" type="text" id="reason" />
        <h1>Enter amount:</h1>
        <input className="border-2" type="text" id="amount" />
        <div>
          <button
            type="submit"
            className="my-5 py-2 px-3 border bg-slate-700 text-white"
          >
            add amount
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryField;
