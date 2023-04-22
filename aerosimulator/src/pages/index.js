import React, { useEffect, useRef, useState } from 'react';
import { INITIAL_VALUE, TOOL_NONE, UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader } from 'react-svg-pan-zoom-loader';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';

const Aero = () => {
    const Viewer = useRef();

    const [tool, setTool] = useState(TOOL_NONE);
    const [value, setValue] = useState(INITIAL_VALUE);

    useEffect(() => {
        Viewer.current.fitToViewer();
    }, []);

    return (
        <div class="flex-container">
            <div class="menu-superior">
                <img src={logo}></img>
            </div>
            <div class="mapa">
                <ReactSvgPanZoomLoader
                    src={mapa}
                    render={(graph) => (
                        <UncontrolledReactSVGPanZoom
                            ref={Viewer}
                            width={1500}
                            height={1500}
                            tool={tool}
                            setTool={setTool}
                            value={value}
                            setValue={setValue}
                            scaleFactorMin={1}
                            scaleFactorMax={5}
                            background='#F1FAEE'
                            SVGBackground='#F1FAEE'
                            customMiniature={() => null}
                        >
                            <svg width={500} height={500}>
                                {graph}
                            </svg>
                        </UncontrolledReactSVGPanZoom>
                    )}
                />
                
            </div>
        </div>
        
        
    );
}

export default Aero;
