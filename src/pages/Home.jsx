import Hero from "../components/Hero"
import StatsCounter from "../components/StatsCounter" 
import CorePillars from "../components/CorePillars" 
const Home = () =>{
    return(
        <div className="home">
            <Hero />
            <StatsCounter />
            <CorePillars />
        </div>
     )
}
export default Home