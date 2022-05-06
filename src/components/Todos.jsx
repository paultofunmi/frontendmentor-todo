import React, { useState } from 'react'

import TodoList from './TodoList'

const Todos = ({tasks, remove, toggle, clear}) => {

  let [filter, setFilter] = useState('all');

  const updateFilter = (filter) => {    
     setFilter(filter);
  }

  return (
    <>
        <section className='todos md:w-6/12 sm:w-11/12 lg:w-5/12 mx-auto sm:mt-5 bg-white dark:bg-dark-blue-2 rounded-md shadow-lg'>        
            <TodoList tasks={tasks} remove={remove} toggle={toggle} filter={filter}/>
            
            <section className='todo-meta flex justify-between text-white dark:text-dark-blue-6 p-3'>
                <div className='items-left text-xs text-gray-blue-3 dark:text-dark-blue-5'>
                    { tasks.filter((task) => !task.checked).length } items left
                </div>

                <div className='md:visible sm:invisible'>
                <ul className='flex gap-3 cursor-pointer'>
                    <li onClick={ () => updateFilter('all')} className={` ${filter === 'all' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>All</li>
                    <li onClick={ () => updateFilter('active')} className={` ${filter === 'active' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>Active</li>
                    <li onClick={ () => updateFilter('complete')} className={` ${filter === 'complete' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>Completed</li>
                </ul>
                </div>

                <div className='items-clear text-xs cursor-pointer text-gray-blue-3 dark:text-dark-blue-5' onClick={ () => clear()}>
                    Clear Completed
                </div>
            </section>
       </section>

      <section className='shadow-md h:full flex justify-center items-center md:w-6/12 sm:w-11/12 lg:w-5/12 mx-auto sm:mt-5 bg-white dark:bg-dark-blue-2 rounded-md p-3 md:invisible'>
          <ul className='flex gap-3 cursor-pointer text-white dark:text-dark-blue-6'>
              <li onClick={ () => updateFilter('all')} className={` ${filter === 'all' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>All</li>
              <li onClick={ () => updateFilter('active')} className={` ${filter === 'active' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>Active</li>
              <li onClick={ () => updateFilter('complete')} className={` ${filter === 'complete' ? 'text-bright-blue': ''} text-xs text-gray-blue-3 dark:text-dark-blue-5`}>Completed</li>
          </ul>
      </section>

      <section className='drag-n-drop-meta h:full flex justify-center items-center md:w-6/12 sm:w-11/12 lg:w-5/12 mx-auto mt-2'>
          <p className='text-sm text-dark-blue-6'>Drag and drop to render list </p>
      </section>
    </>
  )
}

export default Todos