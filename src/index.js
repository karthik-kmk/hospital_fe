import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d2xt0m67qmvtiyqg.us.auth0.com"
      clientId="cWlilvS6OhTKyJPAiUgdbdVC0cn9oi2j"
      authorizationParams={{
        redirect_uri: window.location.origin+"/home",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
