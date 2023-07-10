import { Footer, Navbar } from '../components';
import WhatsappButton from '../components/WhatsappButton';
import {
  About,
  Contact,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  // Contact,
  OurProducts,
} from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden ">
    <div className="w-[90%] m-auto">
      <div className="max-h-[100vh]">
        <WhatsappButton />
        <Navbar />
        <Hero />
      </div>
      <div className="relative">
        <About />
        {/* <div className="gradient-03 z-0" /> */}
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <Insights />
      </div>
      {/* <div className="gradient-03 z-0" /> */}
      <OurProducts />

      <div className="relative">
        <div className="gradient-03 z-0" />
        <Feedback id="meetVidariosOwners" />
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
);

export default Page;
