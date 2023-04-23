import React, { useRef } from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';

const Aero = () => {
    const Viewer = useRef();

    return (
        <div class="flex-container">
            <div class="menu-superior">
                <img src={logo}></img>
            </div>
            <div class="mapa">
                <ReactPanZoom
                    image={mapa}
                    alt="GRAFO"
                />
            </div>
        </div>
    );
}

export default Aero;
