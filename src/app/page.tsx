import styles from "./page.module.css";
import Header from "@/widgets/Header";

export default function Home() {
  return (
      <>
        <Header/>
        <div className={styles.page}>
          <main className={styles.main}>
            <article className="b-typo b-typo_post" lang="ru">
              <p>Есть многое на свете, друг Горацио, <br/> что и не снилось нашим мудрецам</p>
            </article>
          </main>
        </div>
      </>
  );
}
