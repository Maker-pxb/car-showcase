'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  btnType,
  containerStyle,
  handleClick
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
