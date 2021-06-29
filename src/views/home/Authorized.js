import logo from '../../logo.svg';
import '../../App.css';
import userManager from '../../store/helpers/UserManager'

function App() {

  const onLogout = () => {
    console.log(`${process.env.REACT_APP_IDENTITY_SERVER}/identity`)
    userManager.signoutRedirect();  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Authorized view</h1>
        <button type="button" className="btn btn-danger" onClick={onLogout}>Logout</button>
      </header>
    </div>
  );
}

export default App;
