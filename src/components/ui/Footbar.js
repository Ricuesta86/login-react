import React from 'react';

const Footbar = () => {
    return (
        <>
            <footer className="bg-dark footer">
                <div className="row ">
                    <div className="col-4">Copyright ©2020</div>
                    <div className="col-4">Developed by Team 51 Comfeco</div>
                    <div className="col-4 d-flex justify-content-center">
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
