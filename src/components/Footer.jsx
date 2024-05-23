import logo from '../images/logo.png'
function Footer() {
  return (
    <footer className='footer'>
        <img className="footer__image" src={logo} alt="" />
        <p className='footer__text'>Lucía de la Fuente Mora. Evaluación Módulo 3: React. Bootcamp Adalab: Programación Web.</p>
    </footer>
  )
}

export default Footer