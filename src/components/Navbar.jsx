export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Messaging Client</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14198675/pexels-photo-14198675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}
