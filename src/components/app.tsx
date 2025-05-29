import Main from '../pages/main-page';
import Login from '../pages/login-page';
import Favorites from '../pages/favorites-page';
import Offer from '../pages/offer-page';
import NotFoundPage from '../pages/not-found-page';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from 'react-router-dom';
import { AppRoute } from '../const';

type AppProps = {
  offerCounter: number;
}

function App({ offerCounter }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offerCounter={offerCounter} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>


    </BrowserRouter>

  );
}

export default App;
