import React from "react";
import styles from "./styles/image.module.scss";
import { clsx } from "clsx";

type LogoProps = {
  image: string;
  alt: string;
  layoutStyles?: string;
  logoText?: string;
  logoTextStyles?: string;
};

const Image: React.FC<LogoProps> = ({
  layoutStyles,
  logoTextStyles,
  alt,
  image,
  logoText,
}) => {
  return (
    <div className={clsx(styles.layout, layoutStyles)}>
      <img src={image} alt={alt} />
      <p className={clsx(styles.logoText, logoTextStyles)}>{logoText}</p>
    </div>
  );
};

export default Image;
