import { useState, useEffect } from 'react'
import Card  from './components/Card'
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://api.openf1.org/v1/drivers?session_key=latest')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
            });
    }, []);

  return (
    <>
      {cards.map(card => {
        return (
          <>
            <Card name={card.full_name} number={card.driver_number} team={card.team_name} photo={card.headshot_url}/>
          </>
          )
      })}
    </>
  )
}

export default App
