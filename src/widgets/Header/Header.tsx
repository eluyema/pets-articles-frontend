import styles from './index.module.css';
import logo from '@/assets/logo.svg';
import Image from "next/image";
import logoText from '@/assets/logo-text.svg';

const Header = () => {
    return <header className={styles.header}>
        <Image className={styles.logo} src={logo} alt={"Furry Kindness logo"} height={48}/>
        <Image className={styles.logo} src={logoText} alt={"Furry Kindness"} height={48}/>
    </header>
};

export default Header;