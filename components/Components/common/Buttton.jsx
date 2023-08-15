import React from 'react'
import "./button.scss"

const Buttton = ({
    children,
    onClick,
    className,
}) => {
  return (
    <>
    <button className={`common-button ${className} `} onClick={onClick}>
        {children}
    </button>
      
    </>
  )
}

export default Buttton
