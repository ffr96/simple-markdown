import MainView from './components/Layout/MainView';
import Intro from './View/Intro';
import CenterBox from './components/Layout/CenterBox';
import Footer from './View/Footer';

function App() {
  return (
    <MainView>
      <CenterBox>
        <Intro />
      </CenterBox>
      <Footer />
    </MainView>
  );
}

export default App;
