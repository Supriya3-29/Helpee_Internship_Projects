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

const todoStore = (set:any) => ({
    tasks: [],
    addTask: (task:Task) => {
        set((state: any)=>({
            tasks: [task , ...state.tasks],
        }))
    },
    removeTask: (id:number) => {
        set((state:any)=>({
            tasks: state.tasks.filter((t:any) => t.id !== id)
        }))
    }
});

const useTodoStore = create(
    devtools(
        persist(todoStore, {
            name: "Todo"
        })
    )
)

export default useTodoStore