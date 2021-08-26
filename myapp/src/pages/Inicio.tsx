import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Inicio.css';

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">in</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hola a y bienvenido su app para vida saludable " />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
