

import '../src/styles.css';
import NAVBAR from './Components/NAVBAR';
import NEWS from './Components/NEWS';
import NEWSLINK from './Components/NEWSLINK';

function App() {
  

  return (
    <div className='  lg:pt-[50px] lg:w-[1110px]  lg:mx-auto h-screen'>
      <NAVBAR/>
      <NEWS/>
      <NEWSLINK/>
    </div>
  )
}

export default App
