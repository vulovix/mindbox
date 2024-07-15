import type { FC, ButtonHTMLAttributes } from 'react'

const Quote: FC<ButtonHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={"ui-quote"} {...props}>
      {children}
    </p>
  )
}

export default Quote
