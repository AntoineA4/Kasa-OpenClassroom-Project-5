import { useState } from "react";
import '../styles/components/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse() {
    const [openDescriptions, setOpenDescriptions] = useState([]);
    
    const toggleSection = (index) => {
        if (openDescriptions.includes(index)) {
            setOpenDescriptions(openDescriptions.filter(i => i !== index));
        } else {
            setOpenDescriptions([...openDescriptions, index]);
        }
    };
    
    const items = [
        { title: 'Fiabilité', description: 'Les annonces postées sur Kasa garrantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatiosn sont régulièrement vérifiées par nos équipes.' },
        { title: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout le comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
        { title: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout le comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. ' },
        { title: 'Sécurité', description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
    ];
    
    return (
        <div className="collapse-list">
            {items.map((item, index) => (
                <div key={index} className="collapse-item">
                    <div className="collapse-header">
                        <span className="collapse-title">{item.title}</span>
                        <FontAwesomeIcon 
                            icon={faChevronDown}
                            className={`icon ${openDescriptions.includes(index) ? 'rotate' : ''}`}
                            onClick={() => toggleSection(index)}
                        />
                    </div>
                    {openDescriptions.includes(index) && (
                        <div className="collapse-content">
                            <p>{item.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Collapse;