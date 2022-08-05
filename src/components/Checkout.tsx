type Checkout = {
    boughtList: JSX.Element[]
}

const Checkout = ({boughtList}: Checkout) => {
    // props : PurchaseList , total
    // calculate total price
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 w-full h-full">
            <div
                className="grid bg-skin border-box m-10 sm:col-span-1 md:col-span-2 w-fit  shadow-lg rounded-xl grid-rows-4 ">
                {boughtList}
            </div>
            <div
                className="grid bg-light w-fit m-10 justify-self-center sm:col-span-2 md:col-span-1 drop-shadow-md rounded-xl  min-w-[170px]">
                <h1 className="text-center self-end">Summary</h1>
                <button
                    className="grid place-content-center bg-dark-red rounded-xl h-1/5 w-full self-end p-5 text-light hover:shadow-xl hover:shadow-skin active:shadow-2xl active:shadow-skin ">Purchase
                </button>
            </div>
        </div>);
};
export default Checkout;