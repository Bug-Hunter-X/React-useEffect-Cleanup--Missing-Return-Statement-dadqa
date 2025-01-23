```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: missing return statement
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        setCount(count + 1);
      }
    });
  }, []);

  return <div>Count: {count}</div>;
}
```