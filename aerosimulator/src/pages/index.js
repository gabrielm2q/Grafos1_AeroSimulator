import React from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';
import { main } from '../utils/grafos';

export const Aero = () => {
    // const Viewer = useRef();
    let trajeto = main();
    console.log(trajeto);

    return (
        <div class="flex-container">
            <div class="menu-superior">
                <img src={logo} alt="AEROPORTOS"></img>
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
