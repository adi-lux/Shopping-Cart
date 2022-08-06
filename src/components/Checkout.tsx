type Checkout = {
    boughtList: JSX.Element[]
}

const Checkout = ({boughtList}: Checkout) => {
    // props : PurchaseList , total
    // calculate total price

    const totalPrice = boughtList.reduce((prev, cur) => {
        console.log(prev, cur.props.car.price * cur.props.car.bought);
        return prev + (cur.props.car.price * cur.props.car.bought)
    } , 0)
    console.log(totalPrice);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 w-full h-full">
            <div
                className="grid bg-skin border-box m-10 sm:col-span-1 md:col-span-2 w-fit grid-rows-4 grid-flow-row-dense shadow-lg rounded-xl">
                {boughtList}
            </div>
            <div
                className="grid bg-light w-fit m-10 justify-self-center p-10 sm:col-span-2 md:col-span-1 drop-shadow-md rounded-xl  min-w-[170px]">
                <h1 data-testid='totalPrice' className="text-center self-end">Summary: ${totalPrice}</h1>
                <button
                    className="grid place-content-center bg-dark-red rounded-xl h-1/5 w-full self-end p-5 text-light hover:shadow-xl hover:shadow-skin active:shadow-2xl active:shadow-skin ">Purchase
                </button>
            </div>
        </div>);
};
export default Checkout;