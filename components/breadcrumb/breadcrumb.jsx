import { useId } from "react";
import { useRouter } from "next/router";
import { Breadcrumb as BreadcrumbCarbon, BreadcrumbItem } from "@carbon/react";
import { useBreadcrumb } from "../../contexts";
import styles from "./breadcrumb.module.scss";

export function Breadcrumb() {
  const { breadcrumbItems } = useBreadcrumb();
  const router = useRouter();
  const prefixId = useId();

  return (
    <BreadcrumbCarbon className={styles["breadcrumb"]} noTrailingSlash>
      {breadcrumbItems.map(({ title, href }, index) => (
        <BreadcrumbItem
          href={href}
          onClick={async ({ preventDefault }) => {
            preventDefault();
            await router.push(href);
          }}
          key={prefixId + index}
          isCurrentPage={index === breadcrumbItems.length - 1}
        >
          {title}
        </BreadcrumbItem>
      ))}
    </BreadcrumbCarbon>
  );
}

export default Breadcrumb;
