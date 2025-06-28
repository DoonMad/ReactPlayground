import React from 'react'
import { InputTypes } from '../constants'

function CreateForm({title}) {
  return (
    <div
      className='flex flex-col justify-center'
    >
      <h1
        className='text-3xl dark:text-white'
      >Creating a form for: {title}</h1>
      <div
        className='flex flex-row gap-2'
      >
        <select name="fieldtype" id="fieldtype">
          {InputTypes.map((type) => {
            <option value={type}>{type}</option>
          })}
        </select>
        <button
          className=''
        >Add field</button>

      </div>

    </div>
  )
}

export default CreateForm