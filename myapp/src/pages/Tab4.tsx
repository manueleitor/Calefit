import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Rutinas de ejercicios</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Rutinas saludables</IonCardTitle>
              </IonCardHeader>
    
              <IonCardContent>
              Pequeños y sencillos cambios a nivel nutricional y deportivo, que puedes incorporar poco a poco a tu rutina diaria, para seguir un estilo de vida saludable y sentirte más activo.
          </IonCardContent>
            </IonCard>
    
            <IonCard>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                <IonButton fill="outline" slot="end">View</IonButton>
              </IonItem>
    
              <IonCardContent>
                This is content, without any paragraph or header tags,
                within an ion-cardContent element.
          </IonCardContent>
            </IonCard>
    
            <IonCard>
              <IonItem href="#" className="ion-activated">
                <IonIcon icon={wifi} slot="start" />
                <IonLabel>Pecho</IonLabel>
              </IonItem>
    
              <IonItem href="#">
                <IonIcon icon={wine} slot="start" />
                <IonLabel>Brazo</IonLabel>
              </IonItem>
    
              <IonItem className="ion-activated">
                <IonIcon icon={warning} slot="start" />
                <IonLabel>Pierna</IonLabel>
              </IonItem>
    
              <IonItem>
                <IonIcon icon={walk} slot="start" />
                <IonLabel>Abdomen</IonLabel>
              </IonItem>
            </IonCard>
          </IonContent>
        </IonPage>
      );
    };

export default Tab4;
