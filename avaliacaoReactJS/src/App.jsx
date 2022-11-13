import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';



import './styles.css';

function App() {

  const [nameUser, setNameUser] = useState ("");

  const [colorUser, setColorUser] = useState ("");

  const [cards, setCards] = useState([]);

  return(

  <div className="container">

     <h1>ADICIONE SUA COR FAVORITA</h1>

    <Form 
      nameUser={nameUser}
      colorUser={colorUser}
      cards={cards}
      setNameUser={setNameUser}
      setColorUser={setColorUser}
      setCards={setCards} 
    />

    {
      cards.map((card, i)=>{
        return(
          <Card key={i} card={card} />
        )
      })
    };
  </div>
  )
}

export default App;
