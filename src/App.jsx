import useTheme from "./hooks/useTheme"

function App() {
  const {theme, toggleTheme} = useTheme();
  console.log(theme);
  
  return (
    <>
      hello
    </>
  )
}

export default App
