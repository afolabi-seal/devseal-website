import React, { HTMLAttributes, useMemo } from 'react'
type TextProps = HTMLAttributes<HTMLParagraphElement>
type Props = TextProps & {
    variant?: "sm" | "md"
}

const BodyText = ({className,variant, ...props}: Props) => {
const textSize = useMemo(()=>{
    switch (variant) {
        case "sm":
            return "text-[1.6rem]"
        case "md":
            return "text-[1.8rem]"
        default:
            return "text-[1.6rem]"
    }
},[variant])
return (
    <p className={`${className} font-normal ${textSize} leading-[2.1rem]`} {...props}/>
  )
}

export default BodyText