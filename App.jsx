import './App.css';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Justice for Chip</h1>
        <nav className="space-x-6">
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a href="#forensics" className="hover:underline">Forensics</a>
          <a href="#action" className="hover:underline">Take Action</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </header>
      <section className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">He was retreating when they shot him.</h2>
        <p className="text-red-500 text-xl font-bold mb-4">JUSTICE FOR CHIP</p>
        <Button>Explore the Evidence</Button>
      </section>
    </div>
  );
}

export default App;