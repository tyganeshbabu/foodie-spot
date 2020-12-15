import React from 'react'
import {
    Link
} from "react-router-dom";
import "./css/NotFound.css";
const NotFound = () => {
    return (
        <section className="page_404 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center font-italic">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Looks like you're lost
		                        </h3>
                                <p>The page you are looking for is not available!</p>
                                <Link to="/login" className="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
