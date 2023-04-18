import logo from '../assets/airplane.png';

const Aero = () => {
    return (
        <div class="flex-container">
            <div class="logo">
                <img src={logo}></img>
                <h1>
                    AeroSimulator
                </h1>
            </div>
        </div>
    );
}

export default Aero;