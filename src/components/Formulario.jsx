import React, { useState } from 'react'

const Formulario = () => {

    const [Todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "Pendiente",
        todoCheck: false,
    })

    const [error, setError] = useState(false)


    const handleSubmit = e => {
        e.preventDefault()

        const {todoName, todoDescripcion} = Todo

        if (!todoDescripcion.trim() || !todoName.trim()) {
            setError(true)
            return
        }
        setError(false)
        // console.log(Todo)

        
    }

    const handleChange = e => {

        // console.log(e.target.value)
        // console.log(e.target.name)
        // console.log(e.target.type)

        const {name, value, checked, type} = e.target

        setTodo({
            ...Todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const PintarError = () =>(
        <div className="alert alert-danger">Campos Obligatorios</div>
    )


  return (
    <>
        {
            // Tambien podemos usar el operador ternario ? : null
            error && <PintarError/>
        }
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Ingrese todo'
                name='todoName'
                className='form-control mb-2'
                onChange={handleChange}
                // AL haber usado onchage es necesario asignar el value
                value={Todo.todoName}
            />

            <textarea
                name='todoDescripcion'
                placeholder='Ingrese Descripcion del todo'
                className='form-control mb-2'
                onChange={handleChange}
                value={Todo.todoDescripcion}
            />

            <select
                name="todoEstado"
                className='form-control mb-2'
                onChange={handleChange}
                value={Todo.todoEstado}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className='form-check'>
                <input
                    id='FlexCheckDefault'
                    className='form-check-input'
                    type='checkbox'
                    name='todoCheck'
                    checked={Todo.todoCheck}
                    onChange={handleChange}

                />
                <label className='form-check-label' htmlFor='FlexCheckDefault'>
                    Dar prioridad
                </label>
            </div>

            <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>
    </>
  )
}

export default Formulario