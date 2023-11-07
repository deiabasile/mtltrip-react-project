import "./App.css";
import Button from "./components/button/index";

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
