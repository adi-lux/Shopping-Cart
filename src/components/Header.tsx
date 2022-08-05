import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[100px] bg-dark-green flex justify-between items-center p-10">
        <Link to="/" className='text-skin text-6xl'>CARS</Link>
      <nav className='flex justify-end w-full gap-10 text-light'>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};
export default Header;