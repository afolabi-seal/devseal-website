import React, { HTMLAttributes } from 'react'
type DivProp = HTMLAttributes<HTMLDivElement>
type Props = DivProp & {}

const Container = ({children,className, ...props}: Props) => {
  return (
    <div {...props} className={`${className} max-w-[120rem] mx-auto px-10`}>{children}</div>
  )
}

export default Container