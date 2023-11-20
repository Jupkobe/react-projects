import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainGameContainer from './components/MainGameContainer';

export default function App() {  
  return (
    <div className='w-full min-h-screen bg-image font-roboto'>
      <Navbar />
      <MainGameContainer />
      <Footer />
    </div>
  )
}
