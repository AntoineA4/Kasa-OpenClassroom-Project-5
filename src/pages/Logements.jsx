import { useParams } from 'react-router-dom';
import annonces from '../data/annonces.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import '../styles/Pages/Logements.scss';

function Logements() {
    const { id } = useParams();
    const logement = annonces.find(annonce => annonce.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }
    const items = [
        { title: 'Description', description: logement.description },
        { title: 'Équipements', description: logement.equipments.join(', ') }
    ];
    return (
        <div className="logement-container">
            <Slideshow images={logement.pictures} />
            <div className='logement-detail'>
                <div className='titlePart'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <span>{logement.tags.join(' ')}</span>
                </div>
                <div className='hostAndStars'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" className='hostPicture'/>
                    </div>
                </div>
            </div>
            <Collapse items={items} />
        </div>
    );
}

export default Logements;