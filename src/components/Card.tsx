import React from 'react';

type Car = {
    id: string
    name: string
    description: string
    price: number
    img: string
    bought: number
}

type CardProps = {
    car: Car
    plusHandler: (id:string) => React.MouseEventHandler<HTMLButtonElement>
    minusHandler: (id:string) => React.MouseEventHandler<HTMLButtonElement>
}

const Card = ({car, plusHandler, minusHandler}: CardProps) => {
    const {id, name, img, price, bought} = car;
    return (
        <div id={id}
             className="bg-skin aspect-square w-full rounded-2xl shadow-sm shadow-dark-gray place-items-center grid">
            <p>{name} ({price})</p>
            <img src={img} alt="img"/>
            <div className="flex justify-around w-full">
                <button onClick={plusHandler(id)}>+</button>
                <p>{bought}</p>
                <button onClick={minusHandler(id)}>-</button>
            </div>
        </div>
    );
};

export default Card;