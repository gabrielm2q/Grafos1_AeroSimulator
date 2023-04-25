import Button from '@mui/material/Button';
import React from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import Select from 'react-select';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';
import { getAirports, getRemainingAirports } from '../utils/airports';
import { main } from '../utils/grafos';


export const Aero = () => {
    const [departure, setDeparture] = React.useState(-1);
    const [destination, setDestination] = React.useState(-1);
    let departureOpt = getAirports();
    let destinationOpt = getAirports();

    const handleChangeDeparture = (option) => {
        setDeparture(option.value);
        let remaining = getRemainingAirports(option.value);
        console.log(remaining)
    };

    const handleChangeDestination = (option) => {
        setDestination(option.value);
    };

    const handleButtonClick = () => {
        if(departure !== destination && departure !== -1 && destination !== -1) {
            let route = main(departure, destination)
            console.log(route);
        }
    }

    return (
        <div className='flex-container'>
            <div className='menu-superior'>
                <div className='logo'>
                    <img src={logo} alt="AeroSimulator"></img>
                </div>
                <div className='selectionBoxes'>
                    <div className='boxDeparture'>
                        <Select
                            className='departure'
                            placeholder="Partida"
                            options={departureOpt}
                            onChange={handleChangeDeparture}
                        >
                        </Select>
                    </div>
                    <div className='boxDestination'>
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
            <div className='mapa'>
                <ReactPanZoom
                    image={mapa}
                    alt="Aeroportos do Brasil"
                />
            </div>
        </div>
    );
}
