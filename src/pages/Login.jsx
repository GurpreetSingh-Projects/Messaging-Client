export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Messaging Client</div>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Passoword"></input>
          <button>Sign in</button>
        </form>
        <p>New user? Signup</p>
      </div>
    </div>
  );
}
