import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import { ROUTES } from './Routers/Routes';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TWEETS} element={<TweetsPage />} />
        <Route
          path={ROUTES.ERROR}
          element={<Navigate to={ROUTES.HOME} replace />}
        />
      </Routes>
    </AppWrapper>
  );
}
export default App;
