export default function Home() {
  return (
    <div className="overflow-hidden h-screen">
      <div className="flex items-center justify-center h-1/4 bg-gray700">
        <span className="text-blue text-4xl font-black">to</span>
        <span className="text-purpleDark text-4xl font-black">do</span>
      </div>

      <div className="flex flex-col items-center justify-start h-3/4 bg-gray600">
        <div className="flex items-center justify-center gap-2 mt-3">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="placeholder:text-gray300 text-gray200 bg-gray500 py-3 w-96 ps-4 rounded-lg border-gray700 focus:outline-none focus:border-gray700"
          />
          <button className="bg-blueDark text-gray100 text-center rounded-lg p-3">Criar +</button>
        </div>

        <div className="flex items-center mt-20 justify-between min-w-full px-80">
          <div className="flex gap-2">
            <p className="text-blueDark">Tarefas criadas</p>
            <span className="rounded-xl h-6 w-8 text-center bg-gray400 text-gray200">0</span>
          </div>
          
          <div className="flex gap-2">
            <p className="text-purpleDark">Concluidas</p>
            <span className="rounded-xl h-6 w-8 text-center bg-gray400 text-gray200">0</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <p className="text-gray300 font-semibold">Você ainda não tem tarefas cadastradas</p>
          <p className="text-gray300">Crie tarefas e organize seus itens a fazer</p>
        </div>
        
      </div>
    </div>
  )
}
