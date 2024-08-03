import Banner from '../components/Banner';
import BannerAboutImage from '../assets/Image Apropos.png';
import Collapse from '../components/Collapse';
import '../styles/Pages/A-propos.scss';

function Apropos() {
    const aboutItems = [
        { title: 'Fiabilité', description: 'Les annonces postées sur Kasa garrantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatiosn sont régulièrement vérifiées par nos équipes.' },
        { title: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout le comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
        { title: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout le comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
        { title: 'Sécurité', description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
    ];
    return (
        <div>
            <Banner 
                imageSrc={BannerAboutImage} 
                altText="Image de riviere au milieu des montagnes" 
                text="" 
            />
           <Collapse items={aboutItems} />
        </div>
    );
}

export default Apropos;

