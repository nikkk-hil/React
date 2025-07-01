import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState("false");
  const setMode = () => {
    if (isDarkMode)
      setThemeMode("dark")
    else
      setThemeMode("light");
  }

  //Actual Change in Theme
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode, isDarkMode, setIsDarkMode]);

  return (
    <>
      <ThemeProvider value={{themeMode, isDarkMode, setMode, setIsDarkMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
