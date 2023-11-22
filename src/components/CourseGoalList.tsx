import CourseGoal from "./CourseGoal"
import {type CourseGoal as CourseGoalType} from '../App.tsx'
type CourseGoalList = {
    goalsList: CourseGoalType[];
    onDeleteGoal: (id:number) => void;
}

export default function CourseGoalList({ goalsList, onDeleteGoal }: CourseGoalList) {
    console.log(goalsList, "<-----")
    return (
        <>
            <ul>
                {goalsList.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>

                    </li>
                ))}
            </ul>
        </>
    )
}