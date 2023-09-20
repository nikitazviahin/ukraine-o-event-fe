import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import { LogInPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { HomePage } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { ERoutes } from "./constants/routes.enum";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <main className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={ERoutes.root} element={<HomePage />}></Route>
            <Route path={ERoutes.login} element={<LogInPage />}></Route>
            <Route path={ERoutes.signup} element={<SignUpPage />}></Route>
            <Route path={ERoutes.dashboard} element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </main>
  );
};
