import React from 'react';

interface Props {
  onClick: () => void;
  className?: string;
}

export function CloseButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      aria-label="Close Modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 opacity-25 hover:scale-110 hover:opacity-100 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
