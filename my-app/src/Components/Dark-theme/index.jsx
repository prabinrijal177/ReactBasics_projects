/* eslint-disable no-undef */

import useLocalStorage from './useLocalStorage';
import './style.css';

export default function DarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <div className='theme' data-theme={theme}>
        <div className='container '>
            <p> React JS </p>
            <button onClick={handleToggleTheme}>switch</button>
        </div>

    </div>
  );
}
