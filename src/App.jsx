
import './App.css'

function App() {
//js
  const username = 'Natali'


  return (
   //html
    <div>
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>

      <h1>hello {username} </h1>

      <p className='blueText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolores?</p>

      <button>Click</button>
    </div>
  )
}

export default App
