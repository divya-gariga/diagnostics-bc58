import React from 'react'

type Props={
    imgSrc:any,
    imgAlt:string,
    imgStyle?:any
}
const Image = (props:Props) => {
    const {imgSrc,imgAlt,imgStyle}=props
  return (

<img src={imgSrc} alt={imgAlt} style={imgStyle}/>
    )
}

export default Image