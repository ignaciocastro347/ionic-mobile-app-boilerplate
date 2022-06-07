import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Theme variables */
import "./theme/variables.css";
/* Tailwind styles */
import "./theme/tailwind.css";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Login from "./pages/Login";
import MainLayout from "./theme/MainLayout";

setupIonicReact();

const App: React.FC = () => {
  const isAuthed = true;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect path="/" to={isAuthed ? "/dashboard" : "/login"} exact />
          <Route path="/dashboard" render={() => <MainLayout />} />
          <Route path="/login" component={Login} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
