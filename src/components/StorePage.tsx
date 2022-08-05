type CarList = {
    carList: JSX.Element[]
}

const StorePage = ({carList}: CarList) => {
    return (
        <div className="grid w-full min-h-full">
            <div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-20 p-14">
                {carList}
            </div>
        </div>);
};
export default StorePage;