import styles from "./page.module.css";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

export default function Home() {
  return (
        <div className={styles.page}>
            <Header/>
          <main className={styles.main}>
              <h1 className={styles.title}>
                  Цитата из трагедии Шекспира &ldquo;Гамлет&ldquo;
              </h1>
            <article className="b-typo b-typo_post" lang="ru">
              <p>Есть многое на свете, друг Горацио, <br/> что и не снилось нашим мудрецам</p>
            </article>
          </main>
            <Footer/>
        </div>
  );
}
