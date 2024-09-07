import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const InputwithLabel = ({
  type,
  id,
  name,
  placeholder,
  required,
  labelText,
  htmlFor,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={type === "password" && !showPassword ? "password" : "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        className="peer h-12 w-full px-2 pt-4 border border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
      />
      <label
        htmlFor={htmlFor}
        className="absolute left-2 top-2 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {labelText}
      </label>

      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-4 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </button>
      )}
    </div>
  );
};

export default InputwithLabel;
