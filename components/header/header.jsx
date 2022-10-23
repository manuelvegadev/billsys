import {
  Header as HeaderCarbon,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent
} from "@carbon/react";

import { Fade, Notification, Search, Switcher as SwitcherIcon } from "@carbon/icons-react";

export function Header({}) {
  function action(act) {
    alert(act);
  }

  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }) => (
        <>
          <HeaderCarbon aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
              <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={() => action("search click")}
              >
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications"
                onClick={() => action("notification click")}
              >
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                onClick={() => action("app-switcher click")}
                tooltipAlignment="end"
              >
                <SwitcherIcon size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavMenu renderIcon={Fade} title="Category title">
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu renderIcon={Fade} title="Category title">
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu
                  renderIcon={Fade}
                  title="Category title"
                  isActive={true}
                >
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="https://www.carbondesignsystem.com/"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink
                  renderIcon={Fade}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={Fade}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </HeaderCarbon>
        </>
      )}
    />
  );
}

export default Header;
