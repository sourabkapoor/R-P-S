import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/header';
import Home from './components/home/home';
import PlayArea from './components/playArea/playArea';

function App() {
  return (
    <div className="App">
      {/* header component */}
      <Header />

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<PlayArea />} />
      </Routes>
    </div>
  );
}

export default App;
