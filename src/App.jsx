import './App.css'
import Home from './components/Home/Home'
import Person from './components/Person/Person'
import PersonClasses from './components/Person/PersonClasses'
import Users from './components/Person/UserMap'
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

const vlad = usersInfo[0]
const joan = usersInfo[1]
const adrian = usersInfo[2]

function App() {
  return (
    <div>
      <Header />
      <Home/>

      <Person name = {vlad.name} lastName = {vlad.lastName} age = {vlad.age}/>
      <Person name = {joan.name} lastName = {joan.lastName} age = {joan.age}/>
      <Person name = {adrian.name} lastName = {adrian.lastName} age = {adrian.age}/>

      <PersonClasses name = {vlad.name} lastName = {vlad.lastName} age = {vlad.age}/>
      <PersonClasses name = {joan.name} lastName = {joan.lastName} age = {joan.age}/>
      <PersonClasses name = {adrian.name} lastName = {adrian.lastName} age = {adrian.age}/>
    
      <Users userInfo={usersInfo} />
    </div>
  )
}

export default App
