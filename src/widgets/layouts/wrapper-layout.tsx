import React from 'react';
import styles from './styles/wrapper.module.scss'

interface WrapperTypes {
    children?:React.ReactNode
}

const WrapperLayout: React.FC<WrapperTypes> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default WrapperLayout;