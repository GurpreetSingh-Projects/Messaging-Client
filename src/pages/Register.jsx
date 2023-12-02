export default function Register() {
  return (
    <div className="flex h-100vh place-content-center align-center justify-center bg-blue-400 m-auto">
      <div className="flex">
        <span className="hi">Messaging Client</span>
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
  );
}
