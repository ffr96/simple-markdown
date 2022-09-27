import MainView from './components/Layout/MainView';
import { useState } from 'react';
import Intro from './View/Intro';
import CenterBox from './components/Layout/CenterBox';

function App() {
  return (
    <MainView className=''>
      <CenterBox>
        <Intro />
      </CenterBox>
    </MainView>
  );
}

export default App;
