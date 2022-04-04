import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Profiles from './components/Profiles';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profiles />} />
    </Routes>
  </BrowserRouter>
);

export default App;
