import { Navigate, Route, Routes } from 'react-router-dom';
import TweetsPage from './page/TweetsPage/TweetsPage';
import HomePage from './page/HomePage/HomePage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
