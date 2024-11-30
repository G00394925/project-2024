import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import View from './components/view';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
