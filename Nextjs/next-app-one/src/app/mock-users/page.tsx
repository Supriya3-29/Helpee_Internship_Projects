import { revalidatePath } from "next/cache";
import {auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
}

export default async function MockUsers() {
    const authObj = await auth();
    const userObj = await currentUser();
    console.log(authObj, userObj);


    const res = await fetch('https://686e1806c9090c4953883de7.mockapi.io/users');
    const users = await res.json();

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get('name');
        const res = await fetch('https://686e1806c9090c4953883de7.mockapi.io/users',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        });
        const newUser = await res.json();
        revalidatePath('/mock-users');
        console.log(newUser);

    }

    return (
        <div className="py-10">
            <form action={addUser} className="mb-4 flex items-center justify-center gap-10">
                <input type="text" name="name" required className="shadow appearance-none border rounded  py-2 px-3 text-gray-700" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add user</button>
            </form>
        <div className="grid grid-cols-3 gap-4">
            {users.map((user: MockUser) => (
                <div
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 cursor-pointer">
                    {user.name}
                </div>
            ))}
        </div>
        </div>
    )
}
