import React from 'react';
import './HouseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faMapMarkerAlt, faBath, faSquare } from '@fortawesome/free-solid-svg-icons';

const HouseCard = ({ house }) => {
    return (
        <div className='col-lg-4 m-0 p-0 d-flex justify-content-center'>
            <div className="card-container m-3">
                <div className="card-img">
                    <img src={house.image} alt="" />
                </div>
                <div className="card-txt p-3">
                    <h5 className='card-title'><b>{house.title}</b></h5>
                    <p className='text-secondary'><FontAwesomeIcon icon={faMapMarkerAlt} /> {house.address}</p>
                    <div className="basic-info d-flex justify-content-around">
                        <div className="bed-room">
                            <p><FontAwesomeIcon icon={faBed} /> <b>{house.bedrooms}</b></p>
                        </div>
                        <div className="bath-room">
                            <p><FontAwesomeIcon icon={faBath} /> <b>{house.bathrooms}</b></p>
                        </div>
                        <div className="size">
                            <p><FontAwesomeIcon icon={faSquare} /> <b>{house.size} squre feet</b></p>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="price pt-2">
                        <h5><b>{house.rent}/- BDT</b></h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HouseCard;