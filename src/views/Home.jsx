import FeatureCard from "../components/FeatureCard";
import IconDelivery from "./../assets/features/delivery.png";
import IconFresh from "./../assets/features/fresh.png";
import IconVariety from "./../assets/features/variety.png";
import ImgMainHeader from "./../assets/main-header.png";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const FEATURES_CONFIG = [
  {
    title: "Freshness Guaranteed",
    description:
      "We ensure that all our vegetables are fresh and of the highest quality.",
    imgSrc: IconFresh,
  },
  {
    title: "Wide Variety",
    description:
      "Choose from a wide range of vegetables to suit your culinary needs.",
    imgSrc: IconVariety,
  },
  {
    title: "Fast Delivery",
    description: "Get your vegetables delivered to your doorstep in no time.",
    imgSrc: IconDelivery,
  },
];

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
          </div>
        </div>

        <h2 className="text-[25px]! md:text-[40px]! text-[#333] text-center mt-10 mb-0 mx-2 md:my-10">
          Why you should choose us? We provide the freshest vegetables
        </h2>

        <div className="flex flex-col justify-around items-center md:flex-row">
          {FEATURES_CONFIG.map((feat, index) => {
            const { title, description, imgSrc } = feat;

            return (
              <FeatureCard
                key={index}
                title={title}
                description={description}
                imgSrc={imgSrc}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
