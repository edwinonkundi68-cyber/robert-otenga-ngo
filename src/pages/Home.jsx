import Hero from "../components/Hero"
import StatsCounter from "../components/StatsCounter" 
import CorePillars from "../components/CorePillars"
import VideoGallery from "../components/VideoGallery" 
const Home = () =>{
    return(
        <div className="home">
            <Hero />
            <StatsCounter />
            <CorePillars />
            <VideoGallery />
        </div>
     )
}
export default Home