import { Task } from "@/types/task.interface"
import { Trash2 } from "lucide-react"

interface TaskProps {
  task: Task
}

export default function Task({ task }: TaskProps) {
  return (
    <div className={`flex w-736 bg-gray500 rounded-lg mb-3 items-center justify-center p-3
      ${task.completed ? "border-none" : "border border-solid border-gray400"}`}
    >
      <input
        type="checkbox"
        className="ml-1 w-5 h-5 rounded-full border-2 border-solid
        bg-gray400 border-blue focus:ring-transparent focus:ring-offset-0 hover:border-blueDark
        checked:bg-purpleDark checked:hover:bg-purple checked:focus:bg-purpleDark"
      />
      <p className={`mx-3 text-sm ${task.completed ? "text-gray300 line-through" : "text-gray100"}`}>
        {task.desc}
      </p>
      <Trash2 className="cursor-pointer text-gray300 hover:text-danger h-6 w-6" />
    </div>
  )
}