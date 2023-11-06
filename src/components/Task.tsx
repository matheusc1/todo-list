import { Task } from "@/types/task.interface"
import { Trash2 } from "lucide-react"

interface TaskProps {
  task: Task
  handleDelete: () => void
  onChange: () => void
  checked: boolean
}

export default function Task({ task, handleDelete, onChange, checked }: TaskProps) {
  return (
    <div className={`flex w-368 sm:w-736 bg-gray500 rounded-lg mb-3 items-center justify-between p-3
      ${task.completed ? "border-none" : "border border-solid border-gray400"}`}
    >
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="ml-1 w-5 h-5 rounded-full border-2 border-solid
        bg-gray400 border-blue focus:ring-transparent focus:ring-offset-0 hover:border-blueDark
        checked:bg-purpleDark checked:hover:bg-purple checked:focus:bg-purpleDark"
      />
      <div className="flex-grow">
        <p className={`ml-2 text-sm ${task.completed ? "text-gray300 line-through" : "text-gray100"}`}>
          {task.desc}
        </p>
      </div>
      <Trash2 onClick={handleDelete} className="cursor-pointer ml-2 text-gray300 hover:text-danger min-w-[24px] h-6" />
    </div>
  )
}