import { Suspense, useState } from 'react'
import './App.css'
import AvaliablePlayers from './components/AvaliablePlayers'
import Navbar from './components/Navbar'
import SeclectedPlayers from './components/SeclectedPlayers'
import { ToastContainer } from 'react-toastify'
import Bannar from './components/Bannar'
import Footer from './components/Footer'

const fetchData = async () => {
  const res = await fetch('/playerData.json')
  return res.json()
}
const dataPromise = fetchData()


function App() {

  const [toggle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(200000000)

  const [myPlayers, setMyplayers] = useState([])



  const handleAvavilablesPlayers = () => {
    setToggle(true)
  }

  const handleSeclectedPlayers = () => {
    setToggle(false)
  }

  const handleDeletePlayer = (p) =>{
    const filterData = myPlayers.filter(ply => ply.id !== p.id)
    alert('Do You Want To Delete??')
    setMyplayers(filterData)
    setAvailableBalance(availableBalance + p.price)
  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <Bannar></Bannar>

      <section className='w-[90%] mx-auto flex justify-between items-center py-5'>
        <div>
          <h3 className='font-bold text-xl'>{toggle? 'Available Players' : `Seclected Players (${myPlayers.length}/6)`}</h3>
        </div>

        <div>
          <button onClick={handleAvavilablesPlayers} className={`px-5 py-1 rounded-l-xl text-blue-700 cursor-pointer hover:bg-amber-300 ${toggle === true ? 'bg-amber-400' : 'bg-gray-400'}`}>Available</button>

          <button onClick={handleSeclectedPlayers} className={`px-5 py-1  rounded-r-xl text-blue-700 cursor-pointer hover:bg-gray-300 ${toggle === false ? 'bg-amber-400' : 'bg-gray-400'}`}>Selected ({myPlayers.length})</button>
        </div>
      </section>

      {
        toggle ? <Suspense fallback={<h1>Loading...</h1>}>
          <AvaliablePlayers myPlayers={myPlayers} setMyplayers={setMyplayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} dataPromise={dataPromise}></AvaliablePlayers>
        </Suspense> : <SeclectedPlayers handleAvavilablesPlayers={handleAvavilablesPlayers} handleDeletePlayer={handleDeletePlayer} myPlayers={myPlayers}></SeclectedPlayers>
      }

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
