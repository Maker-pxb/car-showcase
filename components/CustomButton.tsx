'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right icon"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
