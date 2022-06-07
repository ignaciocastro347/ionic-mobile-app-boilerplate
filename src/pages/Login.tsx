import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";

const Login: React.FC = () => {
  return (
    <IonPage>
      <Header title="Iniciar Sesión" />
      <IonContent fullscreen>
        <div className=""></div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
