import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles/button.module.scss";
//----------------
type VariantType = "pagination" | "cartDelete" | "buyCart" | "addToCart";
interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantType;
  children?: React.ReactNode;
  buttonText?: string;
  buttonLayoutStyles?: string;
}
//----------------

const Button: React.FC<ButtonType> = ({
  children,
  buttonText,
  buttonLayoutStyles,
  variant,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.buttonLayout, buttonLayoutStyles, styles[variant])}
    >
      {children}
      <p className={styles.text}>{buttonText}</p>
    </button>
  );
};

export default Button;
