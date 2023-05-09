import '../App.css';
import Graph from '../components/Graph';
import Form from '../components/Form';

export default function Dashboard() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-2 mb-10 bg-slate-800 text-white rounded">
          My Savings App
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
