import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Footer } from "./components/footer";
import { GetInTouch } from "./components/getInTouch";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <Home />
        <About />
        <Skills />
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
}

export default App;
