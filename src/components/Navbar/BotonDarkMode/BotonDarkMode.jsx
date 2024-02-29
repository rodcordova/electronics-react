import './botonDarkMode.css'

import { useDarkModelContext } from '../../../context/DarkModeContext'
export default function BotonDarkMode() {
    const{toogleDarkMode}=useDarkModelContext();

  return (
    <div className='theme-switch-wrapper'>
        <label className='theme-switch' htmlFor='checkbox'>
            <input type="checkbox" id='checkbox' onInput={()=>toogleDarkMode()}/>
            <div className='slider round'></div>
        </label>
    </div>
  )
}
