import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();


  return (
    <>
      <h2 className="text-6xl text-purple-600">Hot Hot cold coffee:{coffees.length} </h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
        }
      </div>
    </>
  )
}

export default App
