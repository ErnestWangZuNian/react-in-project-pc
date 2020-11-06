const { useState, useEffect, useRef } = React;
function App() {
  const [count, setCount] = useState(0);
  const dom = useRef(null);
  useEffect(() => {
    dom.current.addEventListener('click', () => {
      console.log(count);
      setCount(count + 1);
    });
    return () => {
      console.log('我解除render');
    };
  }, []);
  return (
    <div ref={dom} style={{ width: '100%', height: '20px' }}>
      {count}
    </div>
  );
}

export default App;
