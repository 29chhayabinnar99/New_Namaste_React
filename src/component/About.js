import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <User name="Chhaya Binnar [functional]" />
      <UserClass name="Chhaya Binnar [Class]" />
    </div>
  );
};

export default About;
