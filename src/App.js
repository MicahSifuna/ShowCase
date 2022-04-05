
import {  Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
         title="You own store of Nifty NFTs. Start Selling and Glowing"
         description="Buy, store, collect NFTs,
          exchange & earn crypto. Join 25+
          million people using ProfNef Marketplace."

          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
      />
      <SectionWrapper
         title="Smart User Interface Marketplace"
         description="Experience a buttery UI of Pronef NFTMarketplace.
         Smooth constant colors of a fluent UI design."
          mockupImg={assets.homeCards}
          reverse
      />
      <Features />
      <SectionWrapper
         title="Deployment"
         description="ProNef is built using Expo which runs
         natively on all users' devices. you can easily get your app
         into peoples' hands"
          mockupImg={assets.feature}
          reverse
      />
      <SectionWrapper
         title="Creative way to showcase the store"
         description="The app contains two screens. the first screen
         lists all NFTs while the second screen shows the details of a specific NFT."
          mockupImg={assets.mockup}
          banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Micah Sifuna</span>
        </p>
      </div>
    </>
  );
}

export default App;
