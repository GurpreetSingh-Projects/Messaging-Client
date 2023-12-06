export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Messaging Client</div>
        <span className="title">Register</span>
        <form className="">
          <input type="text" placeholder="Enter username"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Passoword"></input>
          <input type="file" id="file" style={{ display: "none" }}></input>
          <label htmlFor="file"></label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
}
