import React, { useRef } from 'react'

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit  = e => {
        e.preventDefault()
        
        const datos = new FormData(formulario.current)

        // console.log(...datos.entries())

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)

        const {todoDescripcion, todoEstado, todoName} = objetoDatos

        // Validacion
        if (!todoDescripcion.trim() || !todoName.trim()) {
            console.log('No. Esta vacio!')
            return
        }
        console.log('Paso toda la validacion')
    }

  return (
    <>
        <h2>No controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Ingrese Todo'
                name='todoName'
                className='form-control mb-2'
                defaultValue={'Tarea1'}
            />

            <textarea 
                name='todoDescripcion'
                placeholder='Ingrese Descripcion del todo'
                className='form-control mb-2'
                defaultValue={'Descripcion de Tarea1'}

            />

            <select 
                name="todoEstado"
                className='form-control mb-2'
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <button className='btn btn-primary'>Agregar</button>
        </form>
        
    </>
  )
}

export default FormNoControlado