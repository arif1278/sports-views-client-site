import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';



const ServiceAll = ({ serv }) => {
    const { _id, name, image_url, price, details } = serv;

    useTitle('services')
    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        }
        else {
            return str;
        }
    };


    return (
        <div className="card card-compact w-70 mt-12 mx-auto bg-base-100 shadow-xl">
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
                <p>{truncateString(details, 100)}</p>
                <div className="card-actions justify-center">
                    <Link to={`/singlepage/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceAll;