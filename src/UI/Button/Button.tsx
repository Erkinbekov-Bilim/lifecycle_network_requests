import React from 'react';
import './Button.css';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

interface IButtonProps extends React.PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
  title?: string;
  motionAnimation?: MotionProps;
}

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  text,
  className,
  style,
  onClick,
  children,
  title,
  motionAnimation,
}) => {
  return (
    <motion.button
      type={type}
      className={className}
      style={style}
      onClick={onClick}
      title={title}
      {...motionAnimation}
    >
      {text}
      {children}
    </motion.button>
  );
};

export default Button;
