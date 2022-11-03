import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles["footer"]}>
      <span>
        Made with ♡ by <a href="https://manuelvega.dev">Manuel Vega</a>
      </span>
      <div className="links">
        <a href="https://github.com/manuelvegadev/billsys">Github</a>
      </div>
    </div>
  );
}

export default Footer;
