import React from 'react';

const Options = ({ options }) => {
    console.log(options);
  return (
    <div className="border ">
      <select
        className="h-[32px] px-1 outline-none border-none focus:outline-none focus:border-none uppercase text-[12px] font-medium w-fit font-poppins select select-xs"
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;