import './App.css'
import PomodoroTimer from './components/Timer'
import ToDoBlock from './components/ToDoBlock'

function App() {

  return (
    <>
      <header>
        <h1>Virtual Cafe</h1>
      </header>
      <main>
        <PomodoroTimer />
        <ToDoBlock />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
