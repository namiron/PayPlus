import React from "react";
import styles from "./styles/header.module.scss";

import logoPayPlus from "../../shared/images/payPlusLogo.png";
import { LOGO_TEXT } from "../../entities/constants/data/header.constants";
import Image from "../../shared/ui/ui-image/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          image={logoPayPlus}
          alt="logo"
          logoText={LOGO_TEXT}
          layoutStyles={styles.layoutStyles}
        />
      </div>
    </header>
  );
};

export default Header;
