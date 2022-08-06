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
    plusHandler: (id: string) => React.MouseEventHandler<HTMLButtonElement>
    minusHandler: (id: string) => React.MouseEventHandler<HTMLButtonElement>
}

const Purchase = ({car, plusHandler, minusHandler}: Purchase) => {
    const {id, name, img, description, bought, price} = car;
    return (

        <div className="bg-light m-2 grid max-h-56 grid-rows-3  grid-cols-3 self-start p-2 rounded-md">
            <b className="col-start-1 col-end-3">{name}</b>
            <img className="h-fit w-1/2 place-self-center row-span-full col-start-3 col-end-4" src={img} alt="This is a column"/>
            <p className="justify-self-start text-start col-span-2 row-span-2 md: text-xs  sm:text-xs lg: text-md grid place-content-center">Description:
                {description}</p>
            <div className="bg-skin max-h-20 w-fit  rounded-xl flex p-3 align-middle gap-4">
                <button className='hover:bg-dark-red hover:text-light text-dark-green text-xl' onClick={plusHandler(id)}>+</button>
                <button className='hover:bg-dark-red hover:text-light text-dark-green text-xl' onClick={minusHandler(id)}>-</button>
            </div>
            <p className="col-start-3 place-self-start justify-self-start">total: {bought} / ${bought * price}</p>
        </div>
    );

};

export default Purchase;