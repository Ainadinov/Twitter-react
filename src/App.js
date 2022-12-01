import './App.css';
import SideMenu from './components/menu';
import Home from './components/home';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <SideMenu/>
        <Home/>
        <Search />
      </div>
    </div>
  );
}

export default App;
