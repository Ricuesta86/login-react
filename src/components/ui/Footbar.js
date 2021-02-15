import React from 'react';

const Footbar = () => {
    return (
        <>
            <footer className="bg-dark container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-4 text-white text-center font-weight-bold py-2">Copyright ©2020</div>
                    <div className="col-lg-4 col-sm-12 col-md-4 text-white text-center font-weight-bold py-2">Developed by Team 51 Comfeco</div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <img src={`./assets/facebook.svg`} alt="Facebook" className="img-svg"/>
                        <img src={`./assets/discord.svg`} alt="Discord" className="img-svg" />
                        <img src={`./assets/youtube-icon.svg`} alt="Youtube" className="img-svg" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footbar
