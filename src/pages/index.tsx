import Jumbotron from "@/components/jumbotron";
import AboutReact from "@/components/home/AboutReact";
import AboutNextJs from "@/components/home/AboutNextJs";
import PageFooter from "@/components/footer"

export default function MyApp() {
  
  return (
    <>
    <div className="container">
      <Jumbotron />
      
      <AboutReact />

      <AboutNextJs />
    </div>
    <PageFooter />
    </>
  );
}