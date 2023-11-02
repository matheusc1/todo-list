'use client'
import EmptyTasks from "@/components/EmptyTasks"
import Input from "@/components/Input"
import Task from "@/components/Task"
import { Task as ITask } from "@/types/task.interface"
import { useState } from "react"

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [task, setTask] = useState({
    id: tasks.length + 1,
    desc: '',
    completed: false
  })
  const completedTasks = tasks.filter(task => task.completed === true)

  function handleAdd() {
    const newTask: ITask = {
      id: tasks.length + 1,
      desc: task.desc,
      completed: false
    }

    if (!newTask.desc) return
    setTasks([...tasks, newTask])
    clear()
  }

  function handleDelete(id: Number) {
    setTasks(tasks => 
      tasks.filter(task => task.id !== id)
    )
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask({
      ...task,
      desc: e.target.value
    })
  }

  function clear() {
    setTask({
      id: tasks.length + 1,
      desc: '',
      completed: false
    })
    console.log('clear')
  }

  if (tasks.length === 0) return <EmptyTasks
    value={task.desc}
    onChange={handleChange}
    onClick={handleAdd}
  />
  
  return (
    <div className="overflow-auto flex flex-col items-center justify-start h-3/4 bg-gray600">
      <div className="flex items-center mt-16 justify-between w-736 mb-6">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-blueDark font-bold text-sm">
            Tarefas criadas
          </p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">
            {tasks.length}
          </span>
        </div>
        <div className="flex gap-2">
          <p className="text-blueDark font-bold text-sm">
            Concluídas
          </p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">
            {completedTasks.length} de {tasks.length}
          </span>
        </div>
      </div>

      {tasks
      .map(task => <Task
        key={task.id}
        task={task}
        handleDelete={() => handleDelete(task.id)}
      />)}

      <Input
        value={task.desc}
        onChange={handleChange}
        onClick={handleAdd}
      />
    </div>
  )
}
