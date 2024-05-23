import logo from '../images/logo.png'
function Header() {
  return (
    <header className='header'>
        <img className='header__image' src={logo} alt="" />
    </header>
  )
}

export default Header