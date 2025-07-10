type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  
  export default async function UsersServer() {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await res.json();
  
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user : User) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
        }