// Header.js
const Header = ({ title }) => {
    return <h1>Hello, {title}!</h1>; // 👈 Bug: 'titlee' should be 'title'
  };
  
  export default Header;
  