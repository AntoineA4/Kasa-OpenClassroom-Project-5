import { useParams } from 'react-router-dom';
import annonces from '../data/annonces.json';
import '../styles/Pages/Logements.scss';

function Logements() {
    const { id } = useParams();
    const logement = annonces.find(annonce => annonce.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="logement-detail">
            <img src={logement.cover} alt={logement.title} className="logement-cover" />
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
            {/* Ajouter d'autres détails du logement ici */}
        </div>
    );
}

export default Logements;