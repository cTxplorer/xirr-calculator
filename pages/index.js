import AboutXIRR from '../components/AboutXIRR.js';
import Calculator from '../components/Calculator.js';
import Header from '../components/Header.js';
import Sidebar from '../components/Sidebar.js';
import Help from '../components/Help.js';
import Contribute from '../components/Contribute.js';

const elementIdMap = {
  ABOUT_XIRR: 'xirr',
  CALCULATOR: 'calculator',
  FAQ: 'faq',
  CONTRIBUTE: 'contribute',
  HELP: 'help',
};

function HomePage() {
  return (
    <div>
      <Header />

      <main className="fold">
        <Sidebar />

        <div className="content">

          <Calculator />
          <div className="mb-16" />

          <AboutXIRR id={elementIdMap.ABOUT_XIRR} />
          <div className="mb-16" />

          <Help id={elementIdMap.HELP} />
          <div className="mb-16" />

          <Contribute id={elementIdMap.CONTRIBUTE} />
          <div className="mb-16" />

        </div>
      </main>
    </div>
  );
}

export default HomePage;
