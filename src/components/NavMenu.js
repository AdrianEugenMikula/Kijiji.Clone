import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav className="">
      <div className="navdropdown">
        <button className="navdropbtn">Cars & Vehicles</button>
        <div className="navdropdown-content">
          <a href="#">Truck</a>
          <a href="#">SUV</a>
          <a href="#">Sedan</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Real Estate</button>
        <div className="navdropdown-content">
          <a href="#">For Rent</a>
          <a href="#">For Sale</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Jobs</button>
        <div className="navdropdown-content">
          <a href="#">For Rent</a>
          <a href="#">For Sale</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Services</button>
        <div className="navdropdown-content">
          <a href="#">Entertainment</a>
          <a href="#">ChildCare and Nanny</a>
          <a href="#">Cleaners and Cleaning</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Services</button>
        <div className="navdropdown-content">
          <a href="#">Entertainment</a>
          <a href="#">ChildCare and Nanny</a>
          <a href="#">Cleaners and Cleaning</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Pets</button>
        <div className="navdropdown-content">
          <a href="#">Animals and Pet Services</a>
          <a href="#">Accessories</a>
          <a href="#">Lost & Found</a>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
