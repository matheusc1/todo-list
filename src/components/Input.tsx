import { PlusCircle } from "lucide-react"

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
  value: string
}

export default function Input({ onChange, onClick, value }: InputProps) {
  return (
    <div className="absolute w-736 top-1/4 bottom-full flex items-center justify-center gap-2 z-10">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="placeholder:text-gray300 text-gray100 w-638 bg-gray500 p-3 rounded-lg border-none focus:outline-none focus:ring-purpleDark"
      />
      <button onClick={onClick} className="flex items-center justify-center gap-2 bg-blueDark hover:bg-blue text-center rounded-lg py-3 px-3 text-sm">
        <span className="text-gray100 font-bold">Criar</span> <PlusCircle size={20} className="text-gray100" />
      </button>
    </div>
  )
}