import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Branding from "@/modules/home/features/branding";
import Benefits from "@/modules/home/features/benefits";
import FeatureHighLight from "@/modules/home/features/feature.highlight";
import Pricing from "@/modules/home/features/pricing";



const Home  = () => {
  return (
    <div>
        <Header /> 
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighLight />
        <Pricing />
        
    </div>
  )
}

export default Home ;