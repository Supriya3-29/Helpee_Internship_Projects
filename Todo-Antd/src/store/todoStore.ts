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

const todoStore = (set:any) => ({
    tasks: [] as Task[],

    addTask: (task:Task) => {
        set((state: TodoStore)=>({
            tasks: [task , ...state.tasks],
        }))
    },
    removeTask: (id:number) => {
        set((state:TodoStore)=>({
            tasks: state.tasks.filter((t:any) => t.id !== id)
        }))
    },
    updateTaskStatus: (id: number, newStatus: number) => {
        set((state: TodoStore) => ({
          tasks: state.tasks.map((t: any) =>
            t.id === id ? { ...t, status: newStatus } : t
          ),
        }));
    },
});

const useTodoStore = create<TodoStore>()(
    devtools(
        persist(todoStore, {
            name: "Todo"
        })
    )
)

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