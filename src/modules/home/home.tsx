import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Branding from "@/modules/home/features/branding";
import Benefits from "@/modules/home/features/benefits";
import FeatureHighLight from "@/modules/home/features/feature.highlight";


const Home  = () => {
  return (
    <div>
        <Header /> 
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighLight />
        
    </div>
  )
}

export default Home ;