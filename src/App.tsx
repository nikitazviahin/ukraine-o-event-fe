import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { HomePage } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";
import { ERoutes } from "./constants/routes.enum";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/Theme";
import { Footer } from "./components/Footer";
import { AuthPage } from "./pages/Login";

export const App = () => {
  return (
    <main className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path={ERoutes.root} element={<HomePage />}></Route>
              <Route path={ERoutes.login} element={<AuthPage />}></Route>
              <Route
                path={ERoutes.dashboard}
                element={<DashboardPage />}
              ></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </main>
  );
};
