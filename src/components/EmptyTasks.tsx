import { ClipboardList } from "lucide-react"

export default function EmptyTasks() {
  return (
    <div className="flex flex-col items-center justify-start h-3/4 bg-gray600">
      <div className="flex items-center mt-16 justify-between w-608">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-blueDark font-bold text-sm">Tarefas criadas</p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">0</span>
        </div>
        <div className="flex gap-2">
          <p className="text-blueDark font-bold text-sm">Concluídas</p>
          <span className="rounded-xl py-0.5 px-2 text-xs text-center bg-gray400 text-gray200">0</span>
        </div>
      </div>

      <hr className="w-608 mt-5 h-0.5 my-8 bg-gray400 border-0" />

      <div className="flex flex-col items-center justify-center mt-8">
        <ClipboardList size={56} color="#808080" strokeWidth={1} />

        <p className="text-gray300 font-semibold mt-4">Você ainda não tem tarefas cadastradas</p>
        <p className="text-gray300">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}