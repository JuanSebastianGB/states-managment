import './App.css';
import { Component1, Component2 } from './components';
import { Landing } from './pages';

function App() {
  return (
    <div className="App">
      {/* RXJS */}
      <Component1 />
      <Component2 />
      {/* CONTEXT */}
      <Landing />
    </div>
  );
}

export default App;
