import { useState } from "react";
import '../styles/components/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ items }) { 
    const [openDescriptions, setOpenDescriptions] = useState([]);
    
    const toggleSection = (index) => {
        if (openDescriptions.includes(index)) {
            setOpenDescriptions(openDescriptions.filter(i => i !== index));
        } else {
            setOpenDescriptions([...openDescriptions, index]);
        }
    };
    
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
                    <div className={`collapse-content ${openDescriptions.includes(index) ? 'show' : ''}`}>
                        {(Array.isArray (item.description)) ? item.description.map((equipement, index) => (
                            <p key={index} >{equipement}</p>
                        )) : (
                            <p>{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Collapse;