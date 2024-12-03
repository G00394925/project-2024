import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import View from './components/view';
import Edit from './components/editMusic';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view' element={<View />} />
        <Route path='/editMusic/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
