import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
