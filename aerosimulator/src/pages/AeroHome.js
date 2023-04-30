import Button from '@mui/material/Button';
import React from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import Select from 'react-select';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';
import { getAirports } from '../utils/airports';
import { main } from '../utils/bfs';



export const Aero = () => {
    const [departure, setDeparture] = React.useState(-1);
    const [destination, setDestination] = React.useState(-1);
    const [outputRoute, setOutputRoute] = React.useState("");
    let departureOpt = getAirports();
    let destinationOpt = getAirports();
    let route = [];

    // function PrintOutputTitle(departure, destination) {

    // }
    
    function PrintOutputText(route) {
        setOutputRoute(route.map((element) => {
            return "Passa em " + element + " \n"
        }))
    }

    const handleChangeDeparture = (option) => {
        setDeparture(option.value);
    };

    const handleChangeDestination = (option) => {
        setDestination(option.value);
    };

    const handleButtonClick = () => {
        PrintOutputText([]);
        if(departure !== destination && departure !== -1 && destination !== -1) {
            route = [];
            route = main(departure, destination);
            PrintOutputText(route);
        }
    }

    return (
        <div className='flex-container'>
            <div className='menu-superior'>
                <div className='logo'>
                    <img src={logo} alt="AeroSimulator"></img>
                </div>
                <div className='controlArea'>
                    <div className='selectionBoxes'>
                        <div className='boxDeparture'>
                            <h1>Partida</h1>
                            <Select
                                className='departure'
                                placeholder="Partida"
                                options={departureOpt}
                                onChange={handleChangeDeparture}
                            >
                            </Select>
                        </div>
                        <div className='boxDestination'>
                            <h1>Destino</h1>
                            <Select
                                className='destination'
                                placeholder="Destino"
                                options={destinationOpt}
                                onChange={handleChangeDestination}
                            >
                            </Select>
                        </div>
                        <div className='buttonGenerateRoute'>
                            <Button 
                                variant="contained"
                                onClick={handleButtonClick}
                            >
                                Buscar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentArea'>
                <div className='gridContent'>
                    <div className='mapArea'>
                        <div className='mapa'>
                            <ReactPanZoom
                                image={mapa}
                                alt="Aeroportos do Brasil"
                            />
                        </div>
                    </div>
                    <div className='contentReturnArea'>
                        <div className='contentTitle'></div>
                        <div className='contentRoute'>
                            <p>{outputRoute}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
