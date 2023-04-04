import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar';
import Main from './Components/main';
import All from './Components/all'
import Footer from './Components/footer';

function App() {
  return (
    <>
    <div className='bg-black'>
    <Navbar />
    <Main />
    <All />
    <Footer />
    </div>
    </>
  );
}

export default App;