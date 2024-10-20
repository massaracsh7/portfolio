import Contacts from "../components/Contacts/Contacts";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import MainLayout from "../layouts/MainLayout/MainLayout";

const PortfolioLanding: React.FC = () => {
  return (
    <MainLayout>
      <h1>Hello</h1>
      <Hero/>
      <Skills/>
      <Contacts/>
    </MainLayout>
  );
};

export default PortfolioLanding;