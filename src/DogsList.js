import React from 'react';
import { Link } from 'react-router-dom';

const DogsList = ({ dogs }) => {
    return (
        <>
            {dogs.map(dog => 
                <div key={dog.name}>
                    <img src={dog.src} alt={dog.name} />
                    <h1>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </h1>
                </div>
            )}
        </>
    )
}

export default DogsList;