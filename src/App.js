import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import CheatSheet from './Components/CheatSheet/CheatSheet';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="w-full">
      <HomePage />
      {/* <CheatSheet /> */}
      {/* <CodeEditor /> */}
    </div>
  );
}

export default App;
