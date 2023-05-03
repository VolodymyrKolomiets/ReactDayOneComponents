import './App.css'
import Person from './components/Person/Person'
import Users from './components/Person/User'
import Header from './components/header/Header'

const usersInfo = [
  {
    name: 'Vlad',
    lastName: 'Kolomiiets',
    age: 35
  },
  {
    name: 'Joan',
    lastName: 'Baldo',
    age: 45
  },
  {
    name: 'Adrian',
    lastName: 'Martinez',
    age: 25
  }
]

function App() {
  return (
    <div>
      <Header />
      <Users userInfo={usersInfo} />
      <Person/>
    </div>
  )
}

export default App
