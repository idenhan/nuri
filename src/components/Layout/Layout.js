import Head from "next/head";
import Link from "next/link";
import Img from "next/image";
import { useEffect, useState } from "react";
import { Brightness6Rounded } from "@material-ui/icons";

import styles from "./Layout.module.css";
import Logo from "../../images/logo.png";

const Layout = ({ children, title = "NURI" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = theme => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Img
            className={styles.logo}
            src={Logo}
            alt="nuri-logo"
            width={175}
            height={130}
          />
        </Link>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Iden Han @ idenhan.com</footer>
    </div>
  );
};

export default Layout;
