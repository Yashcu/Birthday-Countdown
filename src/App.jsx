// src/App.jsx
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Birthday Countdown</h1>
        <p className="text-gray-600">Track the time until your next birthday!</p>
      </div>
      <Countdown />
    </div>
  );
}

export default App;
