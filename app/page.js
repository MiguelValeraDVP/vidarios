import { Footer, Navbar } from '../components';
import WhatsappButton from '../components/WhatsappButton';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
} from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden ">
    <div className="w-[90%] m-auto">
      <WhatsappButton />
      <div className=" max-h-[100vh]">
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
      </div>
      <div className="relative">
        <Insights />
        <Feedback />
      </div>
    </div>
    <Footer />
  </div>
);

export default Page;
