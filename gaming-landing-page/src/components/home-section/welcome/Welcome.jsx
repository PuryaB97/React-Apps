import "./welcome.scss";

import HomeSection from "../HomeSection";

import {
  bg1,
  champAshe,
  champAhri,
  champGaren,
  distortion,
} from "../../../assets/images";

const champImgs = [champAshe, champAhri, champGaren];

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians,
            and content creators who are waiting for you to join them.
          </div>
          <div className="btns m-t-4">
            <button>PLAY NOW</button>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
      <div className="welcome__img relative"></div>
    </HomeSection>
  );
};

export default Welcome;
