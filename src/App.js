import { Route, Routes } from 'react-router-dom';
import BlockTrain from './Component/Blocktrain/BlockTrain';
import Home from './Component/Home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blocktrain" element={<BlockTrain />} />
      </Routes>
    </div>
  );
}

export default App;
