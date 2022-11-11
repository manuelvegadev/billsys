import { createContext, useContext, useState } from "react";

export const BreadcrumbContext = createContext({
  breadcrumbItems: [{ title: "App", href: "/" }],
  setBreadcrumbItems: (breadcrumbItems) => {},
});

export const BreadcrumbContextProvider = ({ children }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: "App", href: "/" },
  ]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbItems, setBreadcrumbItems }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    console.error("Error deploying the BreadcrumbContext");
  }

  return context;
}

export default useBreadcrumb;
