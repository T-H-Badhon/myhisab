import EntryField from "@/components/home/EntryField";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-center my-10">
        <Link className="py-2 px-3 bg-slate-800 text-white" href={"/all"}>
          All Transaction
        </Link>
      </h1>
      <EntryField />
    </div>
  );
};

export default Homepage;
