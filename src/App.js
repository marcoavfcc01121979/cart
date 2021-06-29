import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext()
  if(loading) {
    return(
      <div className='loading'>
        <h1>Loading</h1>
      </div>
    )
  }
  return (
    <>
      <Navbar /> 
      <CartContainer />
    </>
  );
}

export default App;
