import React, { FC, InputHTMLAttributes } from 'react';
import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({ className, ...rest }: InputProps): JSX.Element => {
    return <input className={`input ${className || ''}`} {...rest} />
}