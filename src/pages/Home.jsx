import Banner from "../components/Banner"
import annonces from "../data/annonces.json"
import Card from "../components/Card"
import "../styles/Pages/Home.scss"

function Home() {
    return (
        <div>
         <Banner />
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