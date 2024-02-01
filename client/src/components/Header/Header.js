import "./Header.scss";
import profile from "../../assets/images/Profile.jpg";

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <p className="header__title">Movies</p>
      </div>
      <img className="header__profile" src={profile} alt="Profile"></img>
    </section>
  );
}

export default Header;
