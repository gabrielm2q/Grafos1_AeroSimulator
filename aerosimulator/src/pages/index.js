import logo from '../assets/logo.png';
import mapa from '../assets/rota-capitais.png';

const Aero = () => {
    return (
        <div class="flex-container">
            <div class="menu-superior">
                <div class="logo">
                    <img src={logo}></img>
                </div>
            </div>
            <div class="mapa">
                <img src={mapa}></img>
            </div>
        </div>
        
        
    );
}

export default Aero;