import { type FormEvent } from "react"
import {useRef} from 'react';

type NewGoalProps ={
    onAddGoal: (goal:string,summary: string) => void;
    //void -> which will returns nothing
}
export default function NewGoal({onAddGoal}: NewGoalProps ) {
   const goal =  useRef<HTMLInputElement>(null); // by default undefined
   const summary = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
           e.preventDefault();
        //    new FormData(e.currentTarget)
        console.log( goal.current!.value)
        console.log(summary.current!.value)
        const enteredGoal = goal.current!.value;
        
        const enteredSummary = summary.current!.value;
          
        onAddGoal(enteredGoal,enteredSummary)
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal}/>
        </p>

        <p>
        <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}