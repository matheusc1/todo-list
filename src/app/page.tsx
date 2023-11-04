'use client'
import EmptyTasks from "@/components/EmptyTasks"
import Input from "@/components/Input"
import Task from "@/components/Task"
import { Task as ITask } from "@/types/task.interface"
import { useEffect, useState } from "react"

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    desc: '',
    completed: false
  })
  const completedTasks = tasks.filter(task => task.completed === true)

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    if (tasks !== null) {
      const storedTasks = JSON.parse(tasks)
      setTasks(storedTasks)
    }
  }, [])

  function handleAdd() {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      desc: task.desc,
      completed: false
    }

    if (!newTask.desc) return
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    clear()
  }

  function handleDelete(id: String) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function handleCompleted(id: String) {
    const updatedTasks = tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed} : task)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask({
      ...task,
      desc: e.target.value
    })
  }

  function clear() {
    setTask({
      id: crypto.randomUUID(),
      desc: '',
      completed: false
    })
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
      .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
      .map(task => <Task
        checked={task.completed}
        onChange={() =>handleCompleted(task.id)}
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
