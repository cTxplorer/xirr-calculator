import AboutXIRR from '../components/AboutXIRR.js';
import Calculator from '../components/Calculator.js';
import Header from '../components/Header.js';
import Sidebar from '../components/Sidebar.js';

const elementIdMap = {
  ABOUT_XIRR: 'xirr',
  CALCULATOR: 'calculator',
  FAQ: 'faq',
  CONTRIBUTE: 'contribute',
};

function HomePage() {
  return (
    <div>
      <Header />

      <main className="fold">
        <Sidebar />

        <div className="content">

          <Calculator id={elementIdMap.CALCULATOR} />

          <div className="mb-16" />

          <AboutXIRR id={elementIdMap.ABOUT_XIRR} />

        </div>
      </main>
    </div>
  );
}

export default HomePage;
