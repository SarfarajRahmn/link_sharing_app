import React from "react";

const Phone = () => {
  return (
    <div className="bg-white min-w-[40%]">
      Phone
      <button
        type="button"
        className="group relative h-14 w-48 overflow-hidden border-2 border-sky-400 text-xl text-sky-400 hover:text-sky-200"
      >
        <span className="bg-sky-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span>
        <span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
        Button
      </button>
    </div>
  );
};

export default Phone;
