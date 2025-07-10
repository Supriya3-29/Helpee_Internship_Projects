import { create } from "zustand"
import { devtools,persist } from "zustand/middleware"

export interface Task {
    id: number,
    name: string,
    description: string,
    tags: string[],
    status: number,
    priority: number,
    date: string
}

interface TodoStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    updateTaskStatus: (id: number, newStatus: number) => void;
}

const useTodoStore = create<TodoStore>()(
    devtools(
      persist(
        (set) => ({
          tasks: [],
          addTask: (task) =>
            set((state) => ({ tasks: [task, ...state.tasks] })),
          removeTask: (id) =>
            set((state) => ({
              tasks: state.tasks.filter((t) => t.id !== id),
            })),
          updateTaskStatus: (id, newStatus) =>
            set((state) => ({
              tasks: state.tasks.map((t) =>
                t.id === id ? { ...t, status: newStatus } : t
              ),
            })),
        }),
        { name: "Todo" }
      )
    )
  );

// const useTodoStore = create()(
//     devtools(
//         persist((set, get) => ({
//             tasks: [],
//             addTask: (task:Task) => {
//                 set((state:any)=>({
//                     tasks: [task , ...state.tasks],
//                 }))
//             },
//             removeTask: (id:number) => {
//                 set((state:any)=>({
//                     tasks: state.tasks.filter((t:any) => t.id !== id)
//                 }))
//             }
//         }), {
//             name: "Todo"
//         })
//     )
// )

export default useTodoStore