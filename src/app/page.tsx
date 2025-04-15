import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className="b-typo b-typo_post" lang="ru">
          <p>Есть многое на свете, друг Горацио, <br/> что и не снилось нашим мудрецам</p>
        </article>
      </main>
    </div>
  );
}
