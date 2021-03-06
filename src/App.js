import { useState } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddTask ] = useState(false)
  const [ tasks, setTasks ] = useState(
    [
        {
            id:1,
            text:'Doctors appointment',
            day:'jan 13 at 4 PM',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'jan 15 at 10 AM',
            reminder:true,
        },
        {
            id:3,
            text:'Grocerry Shopping',
            day:'jan 18 at 6 PM',
            reminder:false,
        },
    ]
) 

//Add Task 

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1 
  const newTask ={ id , ...task }
  setTasks([...tasks, newTask])
}


//Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) =>  task.id !== id ))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map( (task) => task.id  === id ? { ...task, reminder: !task.reminder} : task))
}
  return (
    <Router>
    <div className="container">
      <Header  onAdd={ () => setShowAddTask(!showAddTask) }
      showAdd = {showAddTask}/>
      
      <Route path='/' exact render={(props) => (
        <>
            {showAddTask ? <AddTask onAdd={addTask} /> : ' '}
            { tasks.length > 0 ? (<Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder} /> ) : 
            'No Taks to Show' 
            }
        </>
      )
         
      } />
      <Route path='/about' component={About} />
      <Footer />
      
    </div>
    </Router>
  );
}
export default App;
