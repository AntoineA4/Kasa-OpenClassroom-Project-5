import Banner from "../components/Banner"
import annonces from "../data/annonces.json"
import Card from "../components/Card"
import "../styles/Pages/Home.scss"
import Banner_Home from "../assets/Image Home.png"

function Home() {
    return (
        <div>
         <Banner imageSrc={Banner_Home} altText="Paysage de falaise se jetant dans la mer">
                <span>Chez vous,</span>
                <span>partout et ailleurs</span>
            </Banner>
         <div className="cards-container">
                {annonces.map(annonces => (
                    <Card 
                        key={annonces.id}
                        title={annonces.title}
                        cover={annonces.cover}
                    />
                ))}
            </div>
        </div>
    ) 
}

export default Home 