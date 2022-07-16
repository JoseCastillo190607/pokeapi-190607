import { create } from '@mui/material/styles/createTransitions'
import React, {createContext} from 'react'

const MatriculaContext = createContext({
    nombre: null,
    matricula: null,
})



export default MatriculaContext;