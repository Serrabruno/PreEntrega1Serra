import CarWidget from './CartWidget';
import './NavBar.css';

export default function NavBar(){
    return (
        <header className='allNav'>
        <h1 className='titulo'>Juguetería DB</h1>
        <nav className='barra'>
           <ButtonComponent nombre='Bicicletas'/>
           <ButtonComponent nombre='Monopatines'/>
           <ButtonComponent nombre='Rollers'/>

        </nav>
        
        <CarWidget/>
        </header>
        

    );
}