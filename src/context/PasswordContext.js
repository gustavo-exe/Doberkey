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
    const [onePassword, setOnePassword] = useState("");

    //Cargar las contraseñas
    useEffect(() => {
        refreshPasswords();
    },[]);

    //Refrescar la nota cuando se modifique o inserte

    const refreshPasswords =()=>
    {
        //console.log("PIDIENDO");
        return database.getPassword(setPasswords);
    };

    const getPasswordById = (id) =>
    {

        return database.getPasswordById(id, setOnePassword);
        //console.log(password);
    };



    const addNewPassword = async (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones)=>
    {
        await database.insertPassword(nombreDelSitio, usuario, contraseña, correo, enlace, observaciones, refreshPasswords);
        return refreshPasswords();
    };

    const updateOnePassword = async (contraseña, correo, enlace, nombreDelSitio, observaciones, usuario, id) =>
    {
        await database.updatePassword(contraseña, correo, enlace, nombreDelSitio, observaciones, usuario, id, refreshPasswords);
        return refreshPasswords();
    };

    //Objeto de contexto
    const passwordContext ={
        passwords,
        addNewPassword,
        getPasswordById,
        onePassword,
        updateOnePassword,
    };

    //Pasar los valores
    return(
        <PasswordContext.Provider value={passwordContext}>
            {children}
        </PasswordContext.Provider>
    );
};