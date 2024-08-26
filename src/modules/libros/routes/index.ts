import { Router } from "express"

const librosRouter = Router()

librosRouter.get('/', (_req, res) => {
    console.log('Url base')
    res.send('Libros')
})

librosRouter.post('/', (_req, res) => {
    console.log('Post a libro')
    res.send('Agregado libro')
})

librosRouter.patch('/', (_req, res) =>{
    console.log('Actualizar libro')
    res.send('Actualizado libro')
})

librosRouter.delete('/', (_req, res) =>{
    console.log('Borrar libro')
    res.send('Eliminado libro')
})


export { librosRouter }