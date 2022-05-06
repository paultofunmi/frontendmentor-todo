import React, { useRef } from 'react'

import { ReactComponent as DarkIcon } from '../assets/images/icon-moon.svg'
import { ReactComponent as LightIcon } from '../assets/images/icon-sun.svg'
import { useAlert } from 'react-alert'

const Header = ({theme, toggleTheme, addTodo}) => {

  const todoRef = useRef("")
  const alert = useAlert();

  const handleSubmit = (e) => {
      e.preventDefault();

      if(todoRef.current.value === null || todoRef.current.value.length === 0) {
        alert.error("Todo cannot be empty")
        return;
      }
      addTodo(todoRef.current.value)
      todoRef.current.value = "";
  }

  return (
    <>
        <header className='header-dark-theme'>
          <div className='flex justify-between items-center sm:h-2/5 md:w-6/12 sm:w-11/12 lg:w-5/12 mx-auto'> 
            <h1 className='font-bold text-white tracking-widest uppercase'>Todo</h1>
            <button 
              aria-label="Switch Theme" 
              className="btn-switch" 
              onClick={() => toggleTheme()} >
            { theme === 'light' ? <DarkIcon/> : <LightIcon/>}
            </button>
          </div>
       </header>
       <section className='md:w-6/12 sm:w-11/12 lg:w-5/12 mx-auto sm:-mt-28'>
          <form className="flex py-2 pl-4 bg-white dark:bg-dark-blue-2 rounded-md items-center" onSubmit={handleSubmit}> 
              <button aria-label="Add new todo" type="submit" className="bg-opacity-0 sm:w-4 sm:h-4 mr-3 rounded-full border border-dark-blue-6"></button>
              <input 
                placeholder='Create a new todo item...' 
                className='p-1 w-full bg-white dark:bg-dark-blue-2 text-sm text-dark-blue-6  focus:outline-none'
                ref={todoRef} 
              />
          </form>
       </section>
    </>
  )
}

export default Header