import Hero from "../components/Hero"
import StatsCounter from "../components/StatsCounter" 
import CorePillars from "../components/CorePillars"
import VideoGallery from "../components/VideoGallery" 
import CallToAction from "../components/CallToAction"
const Home = () =>{
    return(
        <div className="home">
            <Hero />
            <StatsCounter />
            <CorePillars />
            <VideoGallery />
            <CallToAction />
        </div>
     )
}
export default Home