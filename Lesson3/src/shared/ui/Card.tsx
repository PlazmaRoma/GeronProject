import { FC, HTMLAttributes } from 'react';
import { COLORS_BACKGROUND } from '../types/colors';


export const Card: FC<HTMLAttributes<HTMLDivElement>> = function Card(props) {
  return (
  <div className={`${COLORS_BACKGROUND.main400} max-w-80 max-h-70 mx-auto p-4 mt-4 rounded-lg ${props.className}`}>
    {props.children}</div>
  )
};