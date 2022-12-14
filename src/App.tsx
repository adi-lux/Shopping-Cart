import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import Checkout from './components/Checkout';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import Card from './components/Card';
import Purchase from './components/Purchase';
import Accuraze from './assets/Accuraze.svg';
import Bobcat from './assets/Bobcat.svg';
import Classic from './assets/Classic.svg';
import Classy from './assets/Classy.svg';
import Cranium from './assets/Cranium.svg';
import Elysium from './assets/Elysium.svg';
import Illuminator from './assets/Illuminator.svg';
import Karma from './assets/Karma.svg';
import Operator from './assets/Operator.svg';
import Pharaoh from './assets/Pharaoh.svg';
import Philzer from './assets/Philzer.svg';
import Racehorse from './assets/Racehorse.svg';
import Rally from './assets/Rally.svg';
import Speedy from './assets/Speedy.svg';
import TheJim from './assets/The Jim.svg';
import Tormentor from './assets/Tormentor.svg';


type Car = {
    id: string
    name: string
    description: string
    price: number
    img: string
    bought: number
}

function carGenerator(name: string, description: string, img: string, price: number): Car {
    return {
        id: uuid(),
        name,
        description,
        img,
        price,
        bought: 0,
    };
}

function App() {
    const [carList, setCarList] = useState<Car[]>([
        carGenerator('Speedy 2020', 'The fastest car on the block. If you want to impress someone, use the Speedy' +
            ' 2020!', Speedy, 26000),
        carGenerator('Bobcat 2019', 'The car for cool cats. Perfect for when you are on the prowl.', Bobcat, 25000),
        carGenerator('Racehorse 2017', 'Legacy model, now the Speedy. Still perfect condition. Buy now or buy never!', Racehorse, 18000),
        carGenerator('Accuraze 2020', 'Make turns with cutting edge accuracy. With Acuraze, you will never, ever' +
            ' crash.', Accuraze, 25000),
        carGenerator('Rally 2019', 'The fastest car on the block! At least in 2019. Still very good and in mint' +
            ' condition.', Rally, 22000),
        carGenerator('The Jim 2022', 'Everybody loves Jim. And everybody loves The Jim 2022.', TheJim, 40000),
        carGenerator('Philzer 2010', 'An oldie but goodie. 50% off right now!', Philzer, 5000),
        carGenerator('Cranium 2020', 'If you enjoy driving intelligently, you will LOVE the Cranium.', Cranium, 26000),
        carGenerator('Elysium 2021', 'Your fantasy car. Be indulged in nature, while nature indulges you.', Elysium, 32000),
        carGenerator('Karma 2020', 'What comes around goes around... now at speeds up to 200mph!', Karma, 22000),
        carGenerator('The Classic 2005', 'Might not be the best car, but with the price tag, who is even' +
            ' complaining?', Classic, 3000),
        carGenerator('Pharaoh 2019', 'Be the ruler of your own empire. Heated cushions for free with the Pharaoh.', Pharaoh, 22000),
        carGenerator('Tormentor 2018', 'Are you metal? Then the Tormentor would be perfect for you. Buy now!', Tormentor, 18000),
        carGenerator('The Classy 2022', 'All of the others stand no match to your elegant grace. Now with auto-pilot' +
            ' mode.', Classy, 35000),
        carGenerator('Illuminator 2019', 'Ever got stuck in a dark road? The illuminator will make sure you never' +
            ' get stuck again.', Illuminator, 29000),
        carGenerator('The Operator 2020', 'Sturdy but useful, the practical car for the practical person.', Operator, 30000),
    ]);
    // what does an item have ? base price, total bought, id, name, description

    const clickAdd = (id: string): React.MouseEventHandler<HTMLButtonElement> => () => {
        setCarList(carList.map((givenCar) => (givenCar.id === id) ? {
            ...givenCar,
            bought: givenCar.bought + 1,
        } : givenCar));
    };

    const clickRemove = (id: string): React.MouseEventHandler<HTMLButtonElement> => () => {
        setCarList(carList.map((givenCar) => {
            if (givenCar.id === id && givenCar.bought <= 1) {
                return {...givenCar, bought: 0};
            } else if (givenCar.id === id) {
                return {...givenCar, bought: givenCar.bought - 1};
            } else {
                return givenCar;
            }
        }));
    };


    // total -> computed from cardList changes
    // Stores all the stateful logic here...
    // 25 card List
    // bought cards (for checkout)
    // add card handler
    // minus card handler

    return (
        <div className="relative font-alma bg-opacity-70 bg-light w-screen min-h-screen grid grid-rows-[100px]">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="store"
                       element={
                           <StorePage carList={carList.map(
                               (car) => {
                                   return <Card key={car.id}
                                                car={car}
                                                minusHandler={clickRemove}
                                                plusHandler={clickAdd}/>;
                               },
                           )}/>}/>
                <Route path="checkout"
                       element={
                           <Checkout boughtList={carList.filter(car => car.bought > 0)
                                                        .map((car) => <Purchase
                                                            key={car.id}
                                                            car={car}
                                                            minusHandler={clickRemove}
                                                            plusHandler={clickAdd}/>)
                           }/>}/>
            </Routes>
        </div>
    );
}

export default App;