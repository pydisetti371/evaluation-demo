import { useState } from 'react';
import './App.css';
import goalsImg from './assets/goals.jpg'
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal:string,summary:string) => {
    console.log(goals, "<-goals")
    let newOne = {
      title: goal,
      description: summary,
      id: Math.random()
    }
    setGoals((goals) => [...goals, newOne
    ])
  }
  
  const handleDeleteGoal = (id:number)  =>{
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }
  
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      {/* <butto  n onClick={handleAddGoal}>Add Goal</button> */}
      {/* <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
      </ul> */}
    
      <CourseGoalList goalsList={goals} onDeleteGoal={handleDeleteGoal}/>

    </main>
  )
}

export default App
