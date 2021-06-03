import Head from "next/head";
import Link from "next/link";
import Img from "next/image";
import styles from "./Layout.module.css";
import Logo from "../../images/logo.png";

const Layout = ({ children, title = "NURI" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Img
            style={{ top: 0 }}
            src={Logo}
            alt="nuri-logo"
            width={175}
            height={130}
          />
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Iden Han @ idenhan.com</footer>
    </div>
  );
};

export default Layout;
