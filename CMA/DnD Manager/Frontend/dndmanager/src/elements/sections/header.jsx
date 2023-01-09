import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <>
      <header>
        <img id='logo-img' src={logo} alt="" />
        <div id="logo-text">D&D Manager</div>
      </header>
      <nav>
        <button className='nav-button'>Board</button>
        <button className='nav-button'>Missions</button>
        <button className='nav-button'>Characters</button>
        <button className='nav-button'>Items</button>
      </nav>
    </>
  );
}

export { Header };
