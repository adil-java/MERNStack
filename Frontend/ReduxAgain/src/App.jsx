import './App.css'; 
import Stack from './components/Stack';
import Input from './components/Input';

function App() {
  return (
    <div className="h-full w-screen bg-slate-400 flex items-center justify-center flex-col">
      <Stack />
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
