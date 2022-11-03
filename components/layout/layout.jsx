import { Footer, Header } from "../../components";
import { Content } from "@carbon/react";
import { HeaderMinimal } from "../header-minimal";
import styles from "./layout.module.scss";

export const Layout = ({ children, type }) => {
  switch (type) {
    case "default":
    default:
      return (
        <>
          <Header />
          <Content className={styles["layout__content"]}>{children}</Content>
          <Footer />
        </>
      );
    case "minimal":
      return (
        <>
          <HeaderMinimal />
          <Content className={styles["layout__content--minimal"]}>
            {children}
          </Content>
          <Footer />
        </>
      );
  }
};

export default Layout;
