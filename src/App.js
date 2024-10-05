import './App.css';
import Player from './Components/Player';
import TimerChallenge from './Components/TimerChallenge';
function App() {
  return (
    <div className="App">
      <Player></Player>
      <div className='challenges'>
        <TimerChallenge title = 'Timer-Easy' targetTime= {5}></TimerChallenge>
        <TimerChallenge title = 'Timer-Medium' targetTime= {10}></TimerChallenge>
        <TimerChallenge title = 'Timer-Hard' targetTime= {15}></TimerChallenge>

      </div>
    </div>
  );
}

export default App;
