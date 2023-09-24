import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "@mui/material";

import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ERoutes } from "./constants/routes.enum";
import { Navbar } from "./components/Navbar";
import { theme } from "./components/Theme";
import { Footer } from "./components/Footer";
import { AuthPage } from "./pages/AuthPage";

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
