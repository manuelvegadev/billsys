import { Header } from "../../components";
import { Content } from "@carbon/react";

export const Layout = ({ children, type }) => {
  switch (type) {
    case "default":
    default:
      return (
        <>
          <Header />
          <Content>{children}</Content>
        </>
      );
    case "body-only-centered":
      return (
        <main
          style={{
            display: "grid",
            placeContent: "center",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
      );
  }
};

export default Layout;
