import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav className="navigationMenu">
      <div className="navdropdown">
        <button className="navdropbtn">Cars & Vehicles</button>
        <div className="navdropdown-content">
          <a href="/vehicles">Truck</a>
          <a href="/vehicles">SUV</a>
          <a href="/vehicles">Sedan</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Real Estate</button>
        <div className="navdropdown-content">
          <a href="/realestate">For Rent</a>
          <a href="/realestate">For Sale</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Jobs</button>
        <div className="navdropdown-content">
          <a href="/jobs">UI/UX developer</a>
          <a href="/jobs">Backend Developer</a>
          <a href="/jobs">FullStack Developer</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Services</button>
        <div className="navdropdown-content">
          <a href="/services">Entertainment</a>
          <a href="/services">ChildCare and Nanny</a>
          <a href="/services">Cleaners and Cleaning</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Vacation Rentals</button>
        <div className="navdropdown-content">
          <a href="/rentals">Canada</a>
          <a href="/rentals">USA</a>
          <a href="/rentals">Mexico</a>
        </div>
      </div>
      <div className="navdropdown">
        <button className="navdropbtn">Pets</button>
        <div className="navdropdown-content">
          <a href="/pets">Animals and Pet Services</a>
          <a href="/pets">Accessories</a>
          <a href="/pets">Lost & Found</a>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
