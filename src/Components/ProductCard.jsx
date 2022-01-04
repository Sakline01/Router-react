import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const Productcard = () => {
    // eslint-disable-next-line
    const [data, setData] = useState([{ name: "SmartPhone", price: 30, id: 0 }, { name: "Watch", price: 20, id: 1 }, { name: "Shirt", price: 50, id: 2 }, { name: "Pants", price: 100, id: 3 }]);
    const { productId } = useParams();
    return (
        <div>
            {data.map(item => (
                item.id === Number(productId) ? (
                    <div key={item.id}>
                        <h3>
                            {item.name}
                        </h3>
                        <h4>
                            Price:{item.price}
                        </h4>
                    </div>
                ) : null
            ))
            }
        </div>
    );
}

export default Productcard;
