import { IonGrid, IonRow, IonCol,IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React from 'react';
import { star } from 'ionicons/icons';


const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rutinas y informacion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Rutinas" />
    <IonRow>
        <IonCol size="1" size-lg offset="3">  
        <IonButton href="Tab4" color="danger" shape="round">Ejercitate</IonButton>
        </IonCol>
        <IonCol size="2" size-lg offset="3">
        <IonButton href="Tab5" color="warning" shape="round">Alimentate</IonButton>
        </IonCol>
        <IonCol size="2" size-lg offset="3">
        <IonButton href="Tab6" color="danger" shape="round">Informate</IonButton>
        </IonCol>
        <IonCol size="2" size-lg offset="2">
        <IonButton href="Tab7" color="warning" shape="round">Motivate</IonButton>
        </IonCol>
      </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default Menu;
