import React, { useEffect, createContext ,useState } from "react";
import {database} from "../components/db";

//Creacion del contexto
export const PasswordContext = createContext({});

export const PasswordContextProvider = (props) =>
{
/*
    Obetener los valores iniciales del contexto
    se obtienen desde los props
*/
    const { password: initialPassword, children } = props;

    //Almacenar los valores en el estado
    const [passwords, setPasswords] = useState(initialPassword);

    //Cargar las contraseñas
    useEffect(() => {
        refreshPasswords();
    },[]);

    const refreshPasswords =()=>
    {
        console.log("PIDIENDO");
        return database.getPassword(setPasswords);
    };

    const addNewPassword =(passwords)=>
    {
        return database.insertPassword(passwords,refreshPasswords);
    };

    //Objeto de contexto
    const passwordContext ={
        passwords,
        addNewPassword,
    };

    //Pasar los valores
    return(
        <PasswordContext.Provider value={passwordContext}>
            {children}
        </PasswordContext.Provider>
    );
};