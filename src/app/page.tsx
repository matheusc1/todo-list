import EmptyTasks from "@/components/EmptyTasks"
import Task from "@/components/Task"
import { PlusCircle } from "lucide-react"

export default function Home() {
  let tasks = [
    {
      id: 123,
      desc: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false
    },
    {
      id: 321,
      desc: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false
    },
    {
      id: 213,
      desc: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: true
    }
  ]
  let completeds = tasks.filter(task => task.completed === true)
  if (!tasks) return <EmptyTasks />
  
  return (
    <div className="flex flex-col items-center justify-start h-3/4 bg-gray600">
      <div className="flex items-center mt-16 justify-between w-736 mb-6">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-blueDark font-bold text-sm">Tarefas criadas</p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">
            {tasks.length}
          </span>
        </div>
        <div className="flex gap-2">
          <p className="text-blueDark font-bold text-sm">Concluídas</p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">
            {completeds.length} de {tasks.length}
          </span>
        </div>
      </div>

      {tasks.map(task => <Task key={task.id} task={task} />)}



      <div className="absolute w-736 top-1/4 bottom-full flex items-center justify-center gap-2 z-10">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="placeholder:text-gray300 text-gray100 w-638 bg-gray500 p-3 rounded-lg border-none focus:outline-none focus:ring-purpleDark"
        />
        <button className="flex items-center justify-center gap-2 bg-blueDark hover:bg-blue text-center rounded-lg py-3 px-3 text-sm">
          <span className="text-gray100 font-bold">Criar</span> <PlusCircle size={20} className="text-gray100" />
        </button>
      </div>
    </div>
  )
}
