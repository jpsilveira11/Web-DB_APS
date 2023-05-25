import { useState, useEffect} from 'react';
import { createContext } from 'react';
import { connection , app} from '../../../server/config'

const UsuarioContext = createContext({})


const UsuarioProvider = ({ children }) => {

    const [user, setUser] = useState(false);
}