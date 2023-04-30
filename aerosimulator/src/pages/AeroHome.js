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
                        <h1>TESTE</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci eu lobortis. Risus sed vulputate odio ut enim blandit volutpat maecenas. Senectus et netus et malesuada fames ac turpis egestas integer. Arcu cursus vitae congue mauris rhoncus aenean vel. Sed tempus urna et pharetra. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Tempus iaculis urna id volutpat lacus laoreet. Id faucibus nisl tincidunt eget. Neque vitae tempus quam pellentesque nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Quis blandit turpis cursus in hac habitasse platea dictumst. Nunc congue nisi vitae suscipit tellus mauris a diam. Augue lacus viverra vitae congue eu consequat ac felis.

Eu lobortis elementum nibh tellus. Sed euismod nisi porta lorem. Feugiat sed lectus vestibulum mattis. Phasellus vestibulum lorem sed risus ultricies. Mi eget mauris pharetra et ultrices neque ornare. Viverra orci sagittis eu volutpat odio facilisis. Tortor at risus viverra adipiscing at in tellus integer feugiat. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Pretium lectus quam id leo in vitae turpis massa. Nec sagittis aliquam malesuada bibendum arcu. Odio pellentesque diam volutpat commodo. Nec ullamcorper sit amet risus nullam eget felis eget.

Magnis dis parturient montes nascetur ridiculus mus. Nec nam aliquam sem et tortor consequat id. Fermentum dui faucibus in ornare. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lorem ipsum dolor sit amet consectetur. Mi quis hendrerit dolor magna eget. Consequat semper viverra nam libero justo laoreet sit amet. Porttitor massa id neque aliquam. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Laoreet suspendisse interdum consectetur libero id faucibus. Nunc consequat interdum varius sit amet mattis vulputate. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Sagittis purus sit amet volutpat consequat. Justo laoreet sit amet cursus. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Sit amet dictum sit amet justo donec enim diam vulputate.

Nunc id cursus metus aliquam eleifend. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Orci ac auctor augue mauris augue neque. Nec ullamcorper sit amet risus nullam eget felis eget. Cras adipiscing enim eu turpis egestas. Semper viverra nam libero justo laoreet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Donec enim diam vulputate ut pharetra sit amet aliquam. Ut sem viverra aliquet eget sit. Nisl purus in mollis nunc sed. Non sodales neque sodales ut etiam sit amet nisl purus. Vulputate dignissim suspendisse in est. Massa enim nec dui nunc. Risus nullam eget felis eget nunc. Fusce id velit ut tortor pretium viverra suspendisse potenti. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Pellentesque nec nam aliquam sem et tortor consequat id. Non sodales neque sodales ut etiam sit amet nisl purus.

Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas sed tempus. Felis donec et odio pellentesque diam. Vestibulum rhoncus est pellentesque elit ullamcorper. Nisi est sit amet facilisis. Semper eget duis at tellus at urna. Elit duis tristique sollicitudin nibh. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Sed viverra tellus in hac habitasse. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Quam viverra orci sagittis eu volutpat odio. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Nulla facilisi etiam dignissim diam quis enim lobortis. Ac placerat vestibulum lectus mauris ultrices. In egestas erat imperdiet sed euismod nisi porta lorem.

Nibh sed pulvinar proin gravida hendrerit lectus. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Vitae purus faucibus ornare suspendisse. Congue eu consequat ac felis donec et odio. Neque sodales ut etiam sit amet. Enim diam vulputate ut pharetra sit. Dictum non consectetur a erat nam. Massa massa ultricies mi quis hendrerit dolor magna. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Lobortis feugiat vivamus at augue. Imperdiet dui accumsan sit amet nulla. Tortor at auctor urna nunc. Nullam non nisi est sit amet. Nunc scelerisque viverra mauris in aliquam sem. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Elementum nibh tellus molestie nunc non. Pulvinar pellentesque habitant morbi tristique senectus. Arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare quam.

Mus mauris vitae ultricies leo integer malesuada. Et netus et malesuada fames ac turpis. Leo urna molestie at elementum eu facilisis sed. Morbi non arcu risus quis varius quam. Orci a scelerisque purus semper eget duis at. Tellus mauris a diam maecenas. Accumsan tortor posuere ac ut consequat semper viverra. Vel facilisis volutpat est velit egestas dui id. Sit amet nulla facilisi morbi. Scelerisque eu ultrices vitae auctor eu augue. Ante in nibh mauris cursus. Mauris a diam maecenas sed enim ut sem viverra. Etiam erat velit scelerisque in dictum.

Tincidunt eget nullam non nisi est sit. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Lectus proin nibh nisl condimentum id. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. In dictum non consectetur a erat nam at lectus urna. Augue interdum velit euismod in pellentesque massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In fermentum posuere urna nec tincidunt praesent semper feugiat. Est ante in nibh mauris cursus mattis. Id donec ultrices tincidunt arcu non sodales. Mauris in aliquam sem fringilla ut.

Sagittis eu volutpat odio facilisis mauris. Non odio euismod lacinia at quis risus sed vulputate odio. Ornare suspendisse sed nisi lacus sed viverra tellus. Euismod in pellentesque massa placerat duis. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. A diam sollicitudin tempor id. Blandit libero volutpat sed cras ornare arcu. Sem viverra aliquet eget sit amet tellus cras adipiscing. Augue interdum velit euismod in pellentesque massa. Consequat id porta nibh venenatis. Ultricies integer quis auctor elit sed vulputate. Sed faucibus turpis in eu. Quis vel eros donec ac odio.

Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Quis ipsum suspendisse ultrices gravida dictum fusce ut. In cursus turpis massa tincidunt dui ut ornare lectus sit. Vulputate ut pharetra sit amet aliquam id diam. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Lacus luctus accumsan tortor posuere ac ut consequat. Cum sociis natoque penatibus et. Faucibus nisl tincidunt eget nullam non nisi est sit. Amet nisl purus in mollis nunc. Scelerisque in dictum non consectetur. Odio facilisis mauris sit amet massa. Massa vitae tortor condimentum lacinia quis vel eros donec. Et molestie ac feugiat sed. Massa tempor nec feugiat nisl pretium fusce. Tempus quam pellentesque nec nam aliquam. Turpis egestas maecenas pharetra convallis posuere morbi leo. Lobortis feugiat vivamus at augue eget arcu dictum varius.
                    </div>
                </div>
            </div>
            
        </div>
    );
}
