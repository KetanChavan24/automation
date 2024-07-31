import CanvasDraw from 'react-canvas-draw';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faTable } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="sidebar">
      <h2>Add other apps</h2>
      <ul>
        <li><FontAwesomeIcon icon={faGoogle} /> Notion</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> Gmail</li>
        <li><FontAwesomeIcon icon={faCalendar} /> Gcalender</li>
        <li><FontAwesomeIcon icon={faTable} /> Gsheets</li>
      </ul>
    </div>
    <div className="canvas-container">
      <CanvasDraw canvasWidth={800} canvasHeight={600} className="canvas" />
    </div>
  </div>
  );
}

export default App;
