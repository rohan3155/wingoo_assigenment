import { Policy, Smile, Users } from './assets/icons';
import { Background, LogoWithName } from './assets/img';
import Card from './components/Card';
import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Analysis,
  Feedback,
  History,
  Home,
  Information,
  PrivacyPolicy,
  Subscription
} from './pages';


const App = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className="bg-center bg-cover min-h-[100vh] sm:bg-auto" style={{ backgroundImage: `url(${Background})`, width: '100%' }}>
          <div className="w-full sm:h-auto backdrop-blur-sm bg-[rgba(255,255,255,0.6)] overflow-y-auto min-h-[100vh]">
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/information' element={<Information />} />
              <Route path='/subscriptions' element={<Subscription />} />
              <Route path='/analysis' element={<Analysis />} />
              <Route path='/history' element={<History />} />
              <Route path='/feedback' element={<Feedback />} />
              <Route path='/policy' element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
