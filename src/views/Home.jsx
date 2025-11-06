import FeatureSection from "../components/FeatureSection";
import ImgMainHeader from "./../assets/main-header.png";
import Button from "./../components/Button";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={ImgMainHeader}
            alt="Main Header"
            className="h-[400px] w-auto object-contain"
          />

          <div>
            <h1 className="text-[40px]! text-center md:text-[70px]! text-[#e69100]">
              One platform for all the vegetables you need.
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
              <Button title={"Explore Now"} variant="primary" size="medium" />

              <Button title={"Call Us"} variant="tertiary" size="medium" />
            </div>
          </div>
        </div>

        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
