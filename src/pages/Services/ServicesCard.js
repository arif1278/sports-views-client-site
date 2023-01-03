import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ service }) => {
    // service details section

    const { _id, image_url, price, name } = service;
    return (
        <div className="card card-compact w-50 mx-auto bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image_url}>
                    <img
                        src={image_url}
                        className="w-full h-[250px] hover:cursor-pointer"
                        alt=""
                    />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/singlepage/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default ServicesCard;