import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const SIZES_MAP = {
  '8-20': 'py-[8px] px-[20px]',
  '10-18': 'py-[10px] px-[18px]',
  '10-23': 'py-[10px] px-[23px]',
  '10-28': 'py-[10px] px-[28px]',
  '10-34': 'py-[10px] px-[34px]',
  '10-39': 'py-[10px] px-[39px]',
  '10-44': 'py-[10px] px-[44px]',
};

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    size?: keyof typeof SIZES_MAP;
}

export default function PrimaryButton({ children, className, ...buttonProps }: Props) {
  const buttonClassList = [
    'font-semibold leading-[1.4em] bg-purple rounded-xl text-sm',
    ...(buttonProps.size ? [SIZES_MAP[buttonProps.size]] : []),
    (buttonProps.disabled
      ? 'border-gray-200 border-2 bg-white text-semi-white cursor-default'
      : 'text-white hover:bg-yellow hover:text-white'
    ),
    className,
  ].join(' ');

  return (
    <button
      {...buttonProps}
      className={buttonClassList}
    >
      {children}
    </button>
  );
}
