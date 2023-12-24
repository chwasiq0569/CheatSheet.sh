import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import FixedCheatSheet from './Components/CheatSheet/FixedCheatSheet';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        {/* <HomePage /> */}
        {/* <CheatSheet /> */}
        {/* <CheatSheetSVGImg /> */}
        {/* <ExportSVG /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cheatsheet" element={<FixedCheatSheet />} />
        </Routes>
        {/* <CodeEditor /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
