import { useState } from "react";
import { FiTrash2, FiStar } from "react-icons/fi";
import { ErrorPage } from "../stories/err.stories";
import { Title } from "../stories/header.stories";
import style from './taskBox.module.css'

type TaskObjectProp = {
    tasks: string,
    pinable: boolean
}

type taskProp = {
    todo: TaskObjectProp[];
}

const TaskBox = ({ todo }: taskProp) => {
    const [task, setTask] = useState<TaskObjectProp[]>(todo)


    const delItem = (ind: number) => {
        setTimeout(() => {
            task.splice(ind, 1)
            setTask([...task])
        }, 300)

    }


    const sorting = (ind: number) => {
        setTimeout(() => {
            if (task[ind].pinable == false) {
                const x = task[ind]
                x.pinable = true
                task.splice(ind, 1)
                setTask([...task])
                task.unshift(x)
                setTask([...task])
            }

            else {
                const x = task[ind]
                x.pinable = false
                delItem(ind)
                task.push(x)
                setTask([...task])
            }
        },300)
    }

    if (task.length === 0) {
        return (
            <div className={style.main}>
                <Title />
                <ErrorPage />
            </div>
        )
    }

    return (
        <div className={style.main}>
            <Title />
            {
                task.map((todoItem: TaskObjectProp, ind: number) => {
                    return (
                        <div key={ind} className={style.items}>
                            <FiStar className={todoItem.pinable ? style.pinned : style.pin} onClick={(e) => {
                                sorting(ind)
                            }
                            } />
                            <h3>{todoItem.tasks}</h3>
                            <FiTrash2 className={style.icons} onClick={(e) =>
                                delItem(ind)
                            } />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskBox;