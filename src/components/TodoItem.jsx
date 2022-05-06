import React from 'react'

import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg'
import { ReactComponent as CheckIcon } from '../assets/images/icon-check.svg'

const TodoItem = ({ task, toggle, remove }) => {

  return (
    <>
        <li className='flex justify-between h-full p-3 items-center'> 
            <p className='flex h-full items-center'>
                <button 
                    onClick={ () => toggle(task.id) }
                    aria-label="Add new todo" 
                    className={ 
                        `bg-opacity-0 sm:w-4 sm:h-4 mr-3 rounded-full 
                        ${!task.checked ? "border-2 border-dark-blue-3": ""}
                        ${task.checked ? "bg-gradient-to-r from-gradient-color-from to-gradient-color-to": ""}`
                        }></button> 
                {task.checked ? <CheckIcon onClick={ () => toggle(task.id)} className='cursor-pointer -translate-x-6'/>: '' }
                <span className={
                    `${!task.checked ? "text-dark-blue-5": ""} 
                    dark:text-dark-blue-3 text-sm 
                    ${task.checked ? "line-through -ml-2 text-gray-blue-2 dark:text-dark-blue-5": ""}`
                    }>{task.text}</span>                
            </p>
            <CrossIcon className='cursor-pointer' 
                onClick={ () => remove(task.id) }
            />
        </li>
    </>
  )
}

export default TodoItem