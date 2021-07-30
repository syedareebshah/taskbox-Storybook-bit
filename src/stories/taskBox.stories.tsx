import TaskBox from "../Comp/taskBox";

export default {
    title: "TaskBox",
    component: TaskBox
}

export const Inbox = () => {
    return (
        <TaskBox todo={[
            {
                tasks: 'Task one',
                pinable: false
            },
            {
                tasks: 'Task two',
                pinable: false
            },
            {
                tasks: 'task three',
                pinable: false
            }
        ]} />
    )
}