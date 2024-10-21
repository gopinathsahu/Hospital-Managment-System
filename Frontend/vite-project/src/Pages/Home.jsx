import Banner from "../Component/Banner";
import Biography from "../Component/Biography";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Message  from "../Component/Message";
import { Services } from "../Component/Services";

export const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />

      <Banner imageUrl={"slide1.webp"} imageUrl2={"banner3.jpg"} />
      <Services
        imageUrl={"cat-1.png"}
        imageUrl2={"cat-2.png"}
        imageUrl3={"cat-3.png"}
        imageUrl4={"cat-4.png"}
        imageUrl5={"cat-5.png"}
      />

      <Message />
      <Footer/>
    </>
  );
};
