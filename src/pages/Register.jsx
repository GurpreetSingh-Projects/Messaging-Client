export default function Register() {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Messaging Client</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="Enter username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Passoword"></input>
            <input type="file"></input>
            <button>Sign up</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </>
  );
}
