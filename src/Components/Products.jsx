import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    // eslint-disable-next-line
    const [data, setData] = useState([{ name: "SmartPhone", price: 30, id: 0 }, { name: "Watch", price: 20, id: 1 }, { name: "Shirt", price: 50, id: 2 }, { name: "Pants", price: 100, id: 3 }]);
    return (
        <div>
            {
                data.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <Link to={`/products/${item.id}`}><button>detail</button></Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;
