import { ButtonHTMLAttributes, ReactNode } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button
    {...props}
    className="
    bg-blue-400 
    font-bold
    text-white
    hover:bg-blue-600
    disabled:cursor-not-allowed
    disabled:bg-blue-200"
    >{children}</button>
  )
}
