import { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
  render() {
    console.log("this.props", this.props);
    const { link, image } = this.props.socialProfiles;
    return (
      <div>
        <a href={link}>
          <img src={image} alt="Icon" />
        </a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        {SOCIAL_PROFILES.map((SOCIAL_PROFILES) => {
          return (
            <SocialProfile
              key={SOCIAL_PROFILES.id}
              socialProfiles={SOCIAL_PROFILES}
            />
          );
        })}
      </div>
    );
  }
}

export default SocialProfiles;
