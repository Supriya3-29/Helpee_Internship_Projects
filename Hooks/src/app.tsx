import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
} from 'react';

// Child component
interface ButtonProps {
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
};

// Main component
export const App: FC = () => {
  const [count, setCount] = useState<number>(0); // useState for count
  const [seconds, setSeconds] = useState<number>(0); // useState for timer
  const [text, setText] = useState<string>(''); // useState for input

  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

  // useCallback to memorize function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  // useEffect to update timer every second
  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // useMemo for expensive calculation
  const doubleCount = useMemo(() => {
    console.log('Calculating double...');
    return count * 2;
  }, [count]);

  // useMemo for filtering names
  const filteredNames = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
  }, [text]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setText(input.value);
  };

  return (
    <div >
      <h2>React Hooks with TypeScript</h2>

      <p>Count: {count}</p>
      <p>Double Count (useMemo): {doubleCount}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button><br />
      <button onClick={() => setCount(count - 1)}>Decrement</button><br />

      <p>Time: {seconds}s</p>

      <input
        type="text"
        value={text || ''}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Typed Text: {text}</p>

      <h3>Filtered Names:</h3>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Button onClick={handleClick} />
    </div>
  );
};




/*** 
 | Hook          | Purpose                 | Common Use Case                |
| ------------- | ----------------------- | ------------------------------ |
| `useState`    | Manage local state      | Form inputs, counters, toggles |
| `useEffect`   | Perform side effects    | Data fetching, subscriptions   |
| `useCallback` | Memoize functions       | Prevent child re-renders       |
| `useMemo`     | Memoize computed values | Expensive calculations         |

***/