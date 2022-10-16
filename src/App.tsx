import './App.css';
import { Component1, Component2, ReduxComponent1 } from './components';
import { Landing } from './pages';

function App() {
  return (
    <div className="App">
      {/* RXJS */}
      <Component1 />
      <Component2 />
      {/* CONTEXT */}
      <Landing />
      {/* REDUX */}
      <ReduxComponent1 />
    </div>
  );
}

export default App;
