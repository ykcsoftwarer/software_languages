import reactLogo from '../../assets/react.svg';
import './Header.css';

const Header = () => {
  const{name, img, options} = Card
  return (
    <div className="logo-container">
      <img className="react-logo" src={reactLogo} alt="react-logo" />
    </div>
  );
};

export default Header;