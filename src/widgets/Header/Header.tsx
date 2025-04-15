import styles from './index.module.css';
import Image from "next/image";
import logoWithText from '@/assets/logo-with-text.svg';

const Header = () => {
    return <header className={styles.header}>
        <Image className={styles.logo} src={logoWithText} alt={"Furry Kindness"} height={48}/>
    </header>
};

export default Header;