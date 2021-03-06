import logo from '../../logo.svg';
import '../../App.css';
import userManager from '../../store/helpers/UserManager'

function App() {

  const onLogin = () => {
    userManager.signinRedirect()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Anonymous view</h1>
        <br />
        <button type="button" className="btn btn-primary" onClick={onLogin}>Login</button>
      </header>
    </div>
  );
}

export default App;
