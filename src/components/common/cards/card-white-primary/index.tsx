import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    className?: string;
}

export default function CardWhitePrimary (props: Props) {
  const rootClassList = ['w-full bg-white shadow-card-primary', props.className].join(' ');

  return (
    <div className={rootClassList}>
      {props.children}
    </div>
  );
}
