import './App.css';
import ibake from './assets/ibake.PNG';
import makanakam from './assets/Makanakam.PNG';
import studyio from './assets/study.io.PNG';
import ibakepdf from './assets/IBake.pdf';
import makanpdf from './assets/makanakam.pdf';
import studypdf from './assets/Study.io.pdf';
import { useState } from 'react';

function App() {
  const ibakeComponent = 
    <div className='ibake-pdf'>
      <iframe src={ibakepdf} title="title">
      </iframe>
    </div>;

  const makanakamComp = 
    <div className='makanakam-pdf'>
      <iframe src={makanpdf} title="title">
      </iframe>
    </div>;

  const studyioComp = 
    <div className='studyio-pdf'>
      <iframe src={studypdf} title="title">
      </iframe>
    </div>;
  
  const [load, setLoad] = useState(ibakeComponent);

  const handleClick = (pages, e) => {
    e.preventDefault();
    console.log(pages);
    if(pages === "makanakam"){
      setLoad(makanakamComp);
    } else if(pages === "studyio"){
      setLoad(studyioComp);
    } else {
      setLoad(ibakeComponent);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Bramantio Galih Arintoko
        </h1>
        <h3>Welcome to my UX Portfolio</h3>
        <p>Please Click The Project's Card Or Logo To Load The Project's Study Case PDF</p>
      </header>

      <div className='ux'>
        
        <div className='pdf'>
          { load }
        </div>

        <div className='content'>

          <div className='ibake' onClick={((e) => handleClick('ibake', e))}>
            <img src={ibake} alt='' />
            <h4>IBake</h4>
          </div>

          <div className='makanakam' onClick={((e) => handleClick('makanakam', e))}>
          <img src={makanakam} alt='' />
            <h4>Makanakam</h4>
          </div>

          <div className='studyio' onClick={((e) => handleClick('studyio', e))}>
          <img src={studyio} alt='' />
            <h4>Study.io</h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
