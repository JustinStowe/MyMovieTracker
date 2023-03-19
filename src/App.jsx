import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MoviesToWatch from "./pages/MoviesToWatch/MoviesToWatch";
import WatchedMovies from "./pages/WatchedMovies/WatchedMovies";
import { SingleMovie } from "./pages/SingleMovie/SingleMovie";
import Search from "./pages/Search/Search";
import { getUser } from "./utilities/user-services";
import { ProvideController } from "./Controller";

import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());
  console.log("App", user);
  return (
    <div className="App">
      <ProvideController>
        {user ? (
          <>
            <Routes>
              <Route
                path="/"
                element={<Search user={user} setUser={setUser} />}
              />
              <Route
                path="/moviestowatch"
                element={<MoviesToWatch user={user} setUser={setUser} />}
              />
              <Route
                path="/watchedmovies"
                element={<WatchedMovies user={user} setUser={setUser} />}
              />
              <Route
                path="/movie/:id"
                element={<SingleMovie user={user} setUser={setUser} />}
              />

              {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
              {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </ProvideController>
    </div>
  );
}

export default App;
