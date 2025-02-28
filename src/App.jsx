import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
    <Navbar />
      <h2 className="text-6xl text-purple-600">Hot Hot cold coffee:{coffees.length} </h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />)
        }
      </div>
    </>
  )
}

export default App
