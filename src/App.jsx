import './App.css'
import PomodoroTimer from './components/Timer'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <header>
        <h1>Virtual Cafe</h1>
      </header>
      <main>
        <PomodoroTimer />
        <ToDoList />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
