import React from "react";
import Login from "./pages/login";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
      {/* <RegistroForm /> */}
    </div>
  );
}

export default App;
