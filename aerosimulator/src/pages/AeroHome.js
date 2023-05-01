import Button from '@mui/material/Button';
import React, { useState } from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import Select from 'react-select';
import logo from '../assets/logo.png';
import mapa from '../assets/mapa.svg';
import { getAirportById, getAirports } from '../utils/airports';
import { main } from '../utils/bfs';

export const Aero = () => {
    const [departure, setDeparture] = React.useState(-1);
    const [destination, setDestination] = React.useState(-1);
    const [outputRoute, setOutputRoute] = useState([]);
    const [outputTitle, setOutputTitle] = React.useState("");
    let departureOpt = getAirports();
    let destinationOpt = getAirports();
    let route = [];

    function clearOutputs(){
        setOutputTitle("");
        setOutputRoute("");
    }

    function PrintOutputTitle(departure, destination) {
        setOutputTitle(() => {
            return `Rota de ${departure.name} para ${destination.name}`
        })
    }

    function PrintErrorMessage(code) {
        switch (code) {
            case 1:
                setOutputTitle("O aeroporto de partida deve ser diferente do aeroporto de destino!")
                break;
            case 2:
                setOutputTitle("Você deve escolher algum aeroporto válido!")
                break;
            default:
                setOutputTitle("Entrada inválida!")
        }

        setOutputRoute([])
    }
    
    function PrintOutputText(route) {
        let intermediateRoute = []
        let message = []

        if(route.length > 2)
            intermediateRoute = route.slice(1)

        message.push(`· Saia do Aeroporto de ${route[0]} com destino a ${route[1]}`)
        for(let i = 0; i < (intermediateRoute.length - 1); i++) {
            message.push(`· Faça conexão no Aeroporto de ${intermediateRoute[i]} com destino a ${intermediateRoute[i+1]}`)
        }
        message.push(`· Desembarque no Aeroporto de ${route[route.length-1]}`)

        setOutputRoute(message)
    }

    const handleChangeDeparture = (option) => {
        setDeparture(option.value);
    };

    const handleChangeDestination = (option) => {
        setDestination(option.value);
    };

    const handleButtonClick = () => {
        clearOutputs();
        if(
            departure === destination  ||
            departure <= -1           ||
            destination <= -1
        ) {
            if(departure <= -1 || destination <= -1) PrintErrorMessage(2)
            else PrintErrorMessage(1)
        } else {
            route = [];
            route = main(departure, destination);
            PrintOutputTitle(getAirportById(departure), getAirportById(destination));
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
                        <div className='contentTitle'>
                            <h1>{outputTitle}</h1>
                        </div>
                        <div className='contentRoute'>
                            {outputRoute.map((element) => {
                                if(outputRoute.length > 1) {
                                    return (
                                        <h3>{element}</h3>
                                    )
                                } else {
                                    return undefined
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
