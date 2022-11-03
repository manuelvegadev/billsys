import {
  Header as HeaderCarbon,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
} from "@carbon/react";

import { Logout, Receipt } from "@carbon/icons-react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Breadcrumb } from "../breadcrumb";
import { Logo } from "../logo";

export function Header({}) {
  const { supabaseClient } = useSessionContext();
  const router = useRouter();

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <HeaderCarbon aria-label="Billsys">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            className={"hide-up-lg"}
          />
          <Logo />
          <Breadcrumb />
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Logout"
              onClick={async () => {
                await supabaseClient.auth.signOut();
                await router.push("/");
              }}
            >
              <Logout size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            // isFixedNav={true}
          >
            <SideNavItems>
              <SideNavLink renderIcon={Receipt}>Invoices</SideNavLink>
            </SideNavItems>
          </SideNav>
        </HeaderCarbon>
      )}
    />
  );
}

export default Header;
