import Image from "next/image";
import styles from "./index.module.css";
import logoWithText from "@/assets/logo-with-text-white.svg";
import ContactsSection from "@/widgets/Footer/ContactsSection";

const Footer = () => {
    return <footer className={styles.footer}>
        <Image className={styles.logo} src={logoWithText} alt={"Furry Kindness"} height={48}/>
        <ContactsSection/>
    </footer>
}

export default Footer;