/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LuAsterisk } from "react-icons/lu";


interface IProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: "text" | "number" | "password";
  required?:boolean,
  name:string;
  register?:any
  error?:string;
  className?:string;
}

const Input: React.FC<IProps> = ({
  label,
  id,
  placeholder = "start typing here..",
  type = "text",
  required = false,
  name,
  register,
  error,
  className,
}) => {

 

  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <label htmlFor={id} className="text-lg font-normal  text-gray-900">
          {label}
        </label>
       { required && <LuAsterisk className="text-red-400"/>}
      </div>
      <input
      {...register(name)}
        className={`w-full rounded-md border px-3 py-2 ${className ?? ""}`}
        placeholder={placeholder}
        id={id}
        type={type}
      />
      <p className="h-1 text-xs text-red-500">{error ? error : ''}</p>
      
    </div>
  );
};

export default Input;