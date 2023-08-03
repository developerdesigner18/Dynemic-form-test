import MainFormComponent from "./components/MainFormComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainFormComponent />
    </main>
  );
}
