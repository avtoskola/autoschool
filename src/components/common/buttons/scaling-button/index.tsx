import { ButtonHTMLAttributes } from 'react';

import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading?: string;
}

export default function ScalingButton (props: ButtonProps) {
  return (
    <button
      {...props}
      className={`${props.loading === 'true' ? 'button--loading' : ''} relative text-white disabled:bg-gray-400 disabled:pointer-events-none bg-purple rounded-xl py-3 px-10 transition ease-in-out hover:-translate-1 hover:scale-110 duration-300 ${props.className}`}
    >
      {props.label}
    </button>
  );
}
