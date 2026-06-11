import Hero from "../components/Hero"
import StatsCounter from "../components/StatsCounter" 
import CorePillars from "../components/CorePillars"
import VideoGallery from "../components/VideoGallery" 
import CallToAction from "../components/CallToAction"
import Topbar from "../components/Topbar"
const Home = () =>{
    return(
        <div className="home">
            <Topbar />
            <Hero />
            <StatsCounter />
            <CorePillars />
            <VideoGallery />
            <CallToAction />
        </div>
     )
}
export default Home