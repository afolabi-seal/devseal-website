import React from 'react'
import Marquee from 'react-fast-marquee'

type Props =  {
    children: React.ReactNode;
}

const MarqueeScroll = (props: Props) => {
  return (
    <Marquee {...props} speed={100} pauseOnHover/>
  )
}

export default MarqueeScroll