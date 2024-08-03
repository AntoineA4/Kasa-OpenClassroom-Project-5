import { useParams } from 'react-router-dom';
import annonces from '../data/annonces.json';
import Slideshow from '../components/Slideshow';
import '../styles/Pages/Logements.scss';

function Logements() {
    const { id } = useParams();
    const logement = annonces.find(annonce => annonce.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="logement-container">
            <Slideshow images={logement.pictures} />
            <div className='logement-detail'>
                <div className='titlePart'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <span>{logement.tags}</span>
                </div>
                <div className='hostAndStars'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" className='hostPicture'/>
                    </div>
                </div>
            </div>
            <p>{logement.description}</p>
            <p>{logement.equipments}</p>
        </div>
    );
}

export default Logements;