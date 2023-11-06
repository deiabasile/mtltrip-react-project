import "./App.css";
import Button from "./components/button/index";
// import { Suspense } from "react";
// import { useTranslation } from "react-i18next";

function App() {
  return (
    <div class="layoutWrapper">
      <header></header>

      <main>
        <Button
          name="name test 2"
          id="123"
          onButtonClick={() => alert("Hello world!")}
          label="Button"
          type="primary"
          isDisabled="true"
        />
        <Button
          name="name test 2"
          id="123"
          onButtonClick={() => alert("Hello world!")}
          label="Button"
          type="secondary"
        />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
