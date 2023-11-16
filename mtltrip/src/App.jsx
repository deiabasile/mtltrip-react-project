import React from 'react';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="layoutWrapper">
      <header />

      <main>
        <Button
          name="name test 2"
          id="123"
          onButtonClick={() => alert('Hello world 1!')}
          label="Button"
          type="primary"
        />
        <Button
          name="name test 2"
          id="123"
          onButtonClick={() => alert('Hello world 2!')}
          label="Button"
          type="secondary"
        />
      </main>

      <footer />
    </div>
  );
}

export default App;
