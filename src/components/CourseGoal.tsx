import { type ReactNode } from 'react';
// import { FC } from 'react'

interface CourseGoalProps {
    title: string;
    children: ReactNode;
    onDelete: (id:number) => void;
    id:number
}

export default function CourseGoal({title,children,id, onDelete}: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <h2>{children}</h2>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             <h2>{children}</h2>
//         </div>
//         <button>Delete</button>
//     </article>
// }

// export default CourseGoal;