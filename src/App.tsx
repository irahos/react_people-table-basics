import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import './App.scss';
import { PeoplePage } from './components/PeoplePage/PeoplePage';

export const App = () => {
  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames('navbar-item', {
                'has-background-grey-lighter': isActive,
              })}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => classNames('navbar-item', {
                'has-background-grey-lighter': isActive,
              })}
              to="/people"
            >
              People
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home Page</h1>} />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/people" element={<PeoplePage />}>
              <Route path=":personSlug?" />
            </Route>
          </Routes>
        </div>
      </main>
    </div>
  );
};
