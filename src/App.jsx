import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MoviesToWatch from "./pages/MoviesToWatch/MoviesToWatch";
import WatchedMovies from "./pages/WatchedMovies/WatchedMovies";
import { SingleMovie } from "./pages/SingleMovie/SingleMovie";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { getUser } from "./utilities/user-services";

import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());
  console.log("App", user);
  return (
    <div className="App">
      {user ? (
        <>
          <Header user={user} setUser={setUser} />
          <Aside user={user} setUser={setUser} />
          <Search user={user} setUser={setUser} />
          <AuthPage user={user} setUser={setUser} />

          <Routes>
            <Route
              path="/moviestowatch"
              element={<MoviesToWatch user={user} setUser={setUser} />}
            />
            <Route
              path="/watchedmovies"
              element={<WatchedMovies user={user} setUser={setUser} />}
            />
            <Route
              path="/movie"
              element={<SingleMovie user={user} setUser={setUser} />}
            />

            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
