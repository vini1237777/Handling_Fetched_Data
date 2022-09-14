import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./Components/NoMatch";
import Navigation from "./Components/UI/Navigation";
import Typography from "./Components/UI/Typography/Typography";
import AllAlbums from "./pages/AllAlbums";
import Users from "./pages/Users";
import classes from "./App.module.css";
import UserAlbums from "./pages/UserAlbums";
import useQueryParams from "./Hooks/useQueryParams";
import AlbumPhotos from "./pages/AlbumPhotos";

function App() {
  const { pathname } = useLocation();
  const { id } = useQueryParams("userId");
  const Albums = id ? UserAlbums : AllAlbums;
  return (
    <div className={classes.tableRoot}>
      {pathname === "/" && <Navigate to="/users" replace />}
      <Typography variant="h3" align="center">
        Fetching Data And Building UI
      </Typography>
      <Navigation />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<AlbumPhotos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
