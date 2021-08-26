import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab6.css';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 6</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Informate" />
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
