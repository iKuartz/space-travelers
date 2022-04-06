import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
// import Profiles from './components/Profiles';
// import Missions from './components/Missions';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
