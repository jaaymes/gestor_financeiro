import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  text: string;
  type: string
}

export const InputText = ({text, ...props}: InputProps) => {
  return (
    <div>
      <label className="flex flex-col w-full">
              <span>{text}</span>
              <input {...props}  className="border border-gray-200 h-10 px-4"/>
            </label>
    </div>
  )
}
