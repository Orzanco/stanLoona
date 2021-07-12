import React from 'react'

import './Foter.css'

function Foter() {
    return (
        <footer className="footer">
        <div className="container foot_borde">
            <div className="row">
                <div className=" col-sm-4 col-md-4 col-12">
                    <h5 className="foot_borde headin5_amrc foot_item">Encuentranos</h5>
                    <p className="mb-3">Estamos ubicados en la ciudad de Neverland </p>
                    <p><i className="fa fa-phone"></i> +12 3456789 </p>
                    <p><i className="fa fa fa-envelope"></i> info@bibistore.com </p>
                </div>
                <div className=" col-sm-4 col-md-4 col-12">
                    <h5 className="foot_borde headin5_amrc foot_item">Enlaces de interes</h5>
                    <ul className="footer_ul">
                        <li><a href="/#">Ultimos productos</a></li>
                        <li><a href="/#">Vapes</a></li>
                        <li><a href="/#">Kits de inicio</a></li>
                        <li><a href="/#">Eliquids</a></li>
                        <li><a href="/#">Pods</a></li>
                    </ul>
                </div>
                <div className=" col-sm-4 col-md col-12">
                    <h5 className="foot_borde headin5_amrc foot_item">Nuestra membresia Orbit</h5>
                    <ul className="footer_ul">
                        <li><a href="/#">¿Como funciona?</a></li>
                        <li><a href="/#">Beneficios</a></li>
                        <li><a href="/#">Articulos para miembros</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">

            <ul className="social_footer_ul">
                <div className="row justify-content-between">
                    <div className="col-2">
                        <li><a href="/#"><i className="fab fa-facebook-f"/></a></li>
                    
                    </div>
                    <div className="col-2">
                        <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
                    </div>
                    <div className="col-2">
                        <li><a href="/#"><i className="fab fa-whatsapp" ></i></a></li>
                    </div>
                </div>
            </ul>
        </div>
    </footer>
    )
}

export default Foter
