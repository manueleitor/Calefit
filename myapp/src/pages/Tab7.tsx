import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab7.css';

const Tab7: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Motivate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 7</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Motivate" />
      </IonContent>
    </IonPage>
  );
};

export default Tab7;
