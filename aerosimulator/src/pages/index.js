import React, { useRef } from 'react';
import {
    TransformComponent,
    TransformWrapper
} from 'react-zoom-pan-pinch';
import logo from '../assets/logo.png';
import mapa from '../assets/rota-capitais.png';

const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
    <>
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </>
  );

const Aero = () => {
    const transformComponentRef = useRef(null);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };

    return (
        <div class="flex-container">
            <div class="menu-superior">
                <img src={logo}></img>
            </div>
            <div class="mapa">
                <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
                ref={transformComponentRef}>
                    {(utils) => (
                        <React.Fragment>
                            <Controls {...utils} />
                            <TransformComponent>
                                <img src={mapa} alt="MAPA DOS AEROPORTOS" />
                                <div onClick={zoomToImage}>AEROPORTOS</div>
                            </TransformComponent>
                        </React.Fragment>
                    )}
                </TransformWrapper>
                
            </div>
        </div>
        
        
    );
}

export default Aero;
