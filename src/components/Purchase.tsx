import React from 'react';

type Car = {
    id: string
    name: string
    description: string
    price: number
    img: string
    bought: number
}

type Purchase = {
    car: Car
    plusHandler: React.MouseEventHandler<HTMLButtonElement>
    minusHandler: React.MouseEventHandler<HTMLButtonElement>
}

const Purchase = ({car, plusHandler, minusHandler}: Purchase) => {
    const {name, img, description, bought, price} = car;
    return (

        <div className="bg-light m-2 grid max-h-56 grid-rows-3  grid-cols-3 self-start p-2 rounded-md">
            <b className="col-start-1 col-end-3">{name}</b>
            <img className="row-span-full col-start-3 col-end-4" src={img} alt="This is a column"/>
            <p className="col-span-2 row-span-2 md: text-xs  sm:text-xs lg: text-md grid place-content-center">Description:
                {description}</p>
            <div className="flex p-3 align-middle gap-4">
                <button onClick={plusHandler}>+</button>
                <button onClick={minusHandler}>-</button>
            </div>
            <p className="col-start-3 place-self-center justify-self-start">total: {bought} / {bought * price}</p>
        </div>
    );

};

export default Purchase;