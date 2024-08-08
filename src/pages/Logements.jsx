import { useParams, useNavigate } from 'react-router-dom';
import annonces from '../data/annonces.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import '../styles/Pages/Logements.scss';
import StarsRate from '../components/StarsRate';
import Tags from '../components/Tags';
import React, { useEffect } from 'react';


function Logements() {
    const { id } = useParams();
    const logement = annonces.find(annonce => annonce.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logement) {
          navigate("/Error");
        }
      }, [logement, navigate]);
      if (!logement) {
        return null; // Éventuellement retourner un composant d'erreur
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
                    <Tags tags={logement.tags} />
                </div>
                <div className='hostAndStars'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" className='hostPicture'/>
                    </div>
                <StarsRate rating = {logement.rating}/>
                </div>
            </div>
            <div className='collapse-logements'>
                <Collapse items={items} />
            </div>
        </div>
    );
}

export default Logements;