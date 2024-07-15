import type { FC, ButtonHTMLAttributes } from 'react'

export interface ButtonProps {
  /**
   * This is a description
   */
  secondary?: boolean
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  secondary = false, 
  ...props
}) => {
  return (
    <button className={"ui button"} {...props}>
      {children}
    </button>
  )
}

export default Button
