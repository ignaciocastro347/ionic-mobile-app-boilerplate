import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/Header";
import "../styles/Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header title="Crear Pedido" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Crear Pedido</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Crear Pedido page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
