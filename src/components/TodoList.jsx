import React, { useState, useEffect } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem'

const TodoList = ({ tasks, remove, toggle, filter }) => {

  let [filteredTodos, setFilteredTodos] = useState(tasks);

  useEffect(() => {

    if(filter === 'active') {
      filteredTodos = tasks.filter( (task) => !task.checked);
    }else if(filter === 'complete') {    
      filteredTodos = tasks.filter( (task) => task.checked);
    }else {
      filteredTodos = [...tasks];
    }

    setFilteredTodos(filteredTodos);
  }, [filter]);

  return (
    <>
        <DragDropContext>        
          <Droppable droppableId='todos'>
            {(provided, snapshot) => (
              <ul 
                className='todos divide-y divide-gray-blue-2 dark:divide-dark-blue-6' 
                {...provided.droppableProps} ref={provided.innerRef}>
                { filteredTodos.map((task, index) => ( 
                    <Draggable key={task.id} draggableId={`${task.id} - task.id`} index={index}>  
                        {(provided, snapshot) => (  
                          <div  
                            ref={provided.innerRef}  
                            {...provided.draggableProps}  
                            {...provided.dragHandleProps}  
                          >  
                            <TodoItem key={task.id} task={task} remove={remove} toggle={toggle} />    
                          </div>  
                        )}  
                    </Draggable>  
                )) }
                {provided.placeholder}
              </ul>
            )}  
          </Droppable> 
        </DragDropContext>
    </>
  )
}

export default TodoList

                             