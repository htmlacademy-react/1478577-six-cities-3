import Main from '../pages/main';

type AppProps = {
  offerCounter: number;
}

function App({offerCounter}:AppProps) {
  return (
    <Main offerCounter={offerCounter}/>
  );
}
export default App;
