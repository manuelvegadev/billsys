import { Header as HeaderCarbon, SkipToContent } from "@carbon/react";
import { Logo } from "../logo";

export function HeaderMinimal({}) {
  return (
    <HeaderCarbon
      aria-label="IBM Platform Name"
      style={{
        padding: "0 .5rem",
      }}
    >
      <SkipToContent />
      <Logo />
      Your job and clients under control!
    </HeaderCarbon>
  );
}

export default HeaderMinimal;
