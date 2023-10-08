import React, { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    iconClassName?: string;
    size: CSSProperties['width'];
    icon?: ReactNode;
}

export default function PlayButton ({ children, className, size, icon, iconClassName, ...buttonProps }: Props) {
  const buttonClassList = [
    'flex justify-center items-center aspect-square overflow-hidden group',
    className,
  ].join(' ');

  const iconClassList = ['w-full h-full overflow-hidden aspect-square ', iconClassName || ''].join(' ');

  return (
    <button
      style={{ width: size }}
      {...buttonProps}
      className={buttonClassList}
    >
      <PlayIcon className={iconClassList}/>
    </button>
  );
}

function PlayIcon (props: {className?: string}) {
  return (
    <svg className={props.className} width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Property 1=Play Button, Property 2=Variant3">
        <circle className="group-hover:fill-yellow" id="Play Button Container" cx="57" cy="57" r="57" fill="#6B21A8"/>
        <path id="Play Button Icon" d="M90 57L40.5 85.5788L40.5 28.4212L90 57Z" fill="white"/>
      </g>
    </svg>
  );
}
