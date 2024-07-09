import React, { useState } from "react";
import Cross from "../../Assets/Icons/Cross";
import SimpleCross from "../../Assets/Icons/SimpleCross";

const StarCodesForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value !== "");

  };

  const wrapperClasses = `${
    inputValue.length === 0 ? "border-gray-400" : isFocused ? "border-green-400" : isFocused && inputValue.length > 0 ? "border-green-400" :"border-red-400"
  }`;

  const labelClasses = `${isFocused ? "top-[-28%] text-[1.4rem] md:text-[1.4rem]" : inputValue.length > 0 ? "top-[-28%] text-[1.4rem] md:text-[1.4rem]" : "top-[20%] text-[1.6rem] md:text-[1.9rem]"  }`

  const warningClasses = `${inputValue.length === 0 && !isFocused ? "max-h-0" : isFocused && inputValue.length === 0 ? "max-h-[300px]" : !isFocused ? "max-h-[300px]" : "max-h-0"}`;

  const crossClasses = `${inputValue.length === 0 && !isFocused ? "hidden" : isFocused && inputValue.length === 0 ? "block" : !isFocused ? "block" : "hidden"}`
  return (
    <form method="post" noValidate>
      <p className="text-[1.4rem]">
        <span className="text-green">* </span>Indicates required field
      </p>
      <div className="overflow-hidden relative block z-0 mx-[-1.6rem] px-[1.6rem] py-[12px] md:mx-[-0.8rem] md:px-[0.8rem] ">
        <div
          className={`bg-[#fff] border-2 rounded-[8px] py-[12px] px-[16px] relative flex items-center ${wrapperClasses}`}
          style={{ transition: "border .2 linear .2" }}
        >
          <label
            htmlFor="starCode"
            className={`bg-[#fff] text-[#000000de] cursor-text left-[12px] opacity-100 px-[0.4rem]  absolute transform-y-[-50%] select-none z-[2] form-label transition-all ease-in duration-75 ${labelClasses}`}
          >
            <span>* </span> Enter your Star Code
          </label>

          <input
            type="text"
            name="StarCode"
            id="starCode"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className="appearance-none bg-transparent text-[#000000de] block leading-4 p-0 w-full"
            style={{ outline: "none" }}
          />

          <div className={crossClasses}>
            <Cross />
          </div>
        </div>
      </div>
      <div className="pr-[1.6rem]">
        <div>
          <div className={`overflow-hidden relative ${warningClasses}`} style={{transition: "max-height .3s cubic-bezier(.25, .46, .45, .94)",}} >
            <span className="block pt-[0.4rem]">
              <span className="flex relative text-[1.3rem] md:text-[1.4rem]">
                {/* <span className="block w-full h-full absolute bg-white">hola</span> */}
                <SimpleCross />
                <span className="inline-block pl-[20px] align-middle">
                  <span>
                    <span className="border-none h-[1px] overflow-hidden p-0 absolute w-[1px]">
                      Error:
                    </span>
                    Please enter a Star Code.
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <button className="ml-auto button mt-[0.8rem] block border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm hover:bg-white hover:opacity-60 transition-all duration-200 ease-in-out text-center no-underline">
        Submit
      </button>
    </form>
  );
};

export default StarCodesForm;
