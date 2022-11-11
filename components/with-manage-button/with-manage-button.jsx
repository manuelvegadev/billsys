import { Button } from "@carbon/react";
import { Settings } from "@carbon/icons-react";

/**
 * @param {React.ReactNode} children
 * @param {string} manageLink
 * */
export function WithManageButton({ children, manageLink }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {children}
      <Button
        href={manageLink}
        target={"_blank"}
        hasIconOnly
        renderIcon={Settings}
        kind={"secondary"}
        size={"md"}
        iconDescription={"Manage"}
        tooltipAlignment={"end"}
      >
        Manage
      </Button>
    </div>
  );
}

export default WithManageButton;
