import AboutMeCard from './Components/AboutMeCard';
import BeforeAfterCard from './Components/BeforeAfterCard';
import ContactsCard from './Components/ContactsCard';
import CourseProgramCard from './Components/CourseProgramCard';
import Header from './Components/Header'
import OpportunityCard from './Components/OpportunityCard';
import PriceCard from './Components/PriceCard';
import TitleCard from './Components/TitleCard';

function App() {
  return (
    <>
    <Header />
    <TitleCard />
    <OpportunityCard />
    <BeforeAfterCard />
    <CourseProgramCard />
    <AboutMeCard />
    <PriceCard />
    <ContactsCard />
    </>
  );
}

export default App;
