import React from "react";
import * as SQLite from "expo-sqlite";


//expo install expo-sqlite
//Crear y abrir la base de datos
const db = SQLite.openDatabase("doberkey.db");
//console.log(db);
//Obtener los datos 
const getPassword = (setPasswordFunc) => {
    db.transaction((tx) =>{
        tx.executeSql("select * from password", 
        [], 
        (_, {rows: {_array}}) => {
            setPasswordFunc(_array);
            console.log("Queriendo Mostrar");
        },
        (_t, error) => {
            console.log("Error al momento de obtener los datos");
            console.log(error);
        },
        (_t, _success) => {
            console.log("Datos obtenidos");
        }
        );
    });
};

//Insertando datos a la tabla password
const insertPassword = async (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones, successFunc) => {
    db.transaction((tx) =>{
        tx.executeSql("insert into password (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones) values(?,?,?,?,?,?);", [nombreDelSitio, usuario, contraseña, correo, enlace, observaciones]);
    },
    (_t, error) => {
        console.log("Error al insertar en la tabla password");
        console.log(error);
    },
    (_t, _success) => {
        successFunc;
    }
    );
};

//Obenter un tupla
const getPasswordById = (id, setPasswordFunc) =>
{
    db.transaction((tx)=>
    {
        tx.executeSql(
            "select * from password where id = ?",
            [id],
            (_, { rows: { _array } }) => {
              setPasswordFunc(_array);
              //console.log(_array);
            },
            (_t, error) => {
              console.log("Error al momento de obtener las contraseña.");
              console.log(error);
            },
            (_t, _success) => {
              console.log("Contraseña obtenida.");
            }
          );
    });
};

//
const updatePassword = async (contraseña, correo, enlace, nombreDelSitio, observaciones, usuario, id, successFunc) => {
    db.transaction((tx) =>{
        tx.executeSql("update password set contraseña=?, correo=? ,enlace=?, nombreDelSitio=?, observaciones=?, usuario=? where id =?", [contraseña, correo, enlace, nombreDelSitio, observaciones, usuario, id]);
    },
    (_t, error) => {
        console.log("Error al actulizar la tabla.");
        console.log(error);
    },
    (_t, _success) => {
        successFunc;
    }
    );
};


//Borrar la base de datos
const dropDatabaseTableAsync = async () =>
{
    return new Promise((resolve,reject)=>
    {
        db.transaction(
            (tx)=>
            {
                tx.executeSql("drop table password");
                console.log("Borrando...");
            },
            (_t, error)=>
            {
                console.log("Error al eliminar la tabla de password");
                reject(error);
            },
            (_t, result) =>
            {
                resolve(result);
            }
            
        );
    });
};

//Crear la tabla de password
const setupDataBaseTableAsync = async () =>
{
    return new Promise((resolve,reject)=>
    {
        db.transaction(
            (tx) =>
            {
                tx.executeSql("create table if not exists password (id integer not null primary key autoincrement, nombreDelSitio TEXT NOT NULL, usuario TEXT NOT NULL, contraseña TEXT NOT NULL, correo TEXT, enlace TEXT, observaciones TEXT );"
                );
                console.log("Creando");
            },
            (_t,error)=>
            {
                console.log("Error al crear una tabla.")
                console.log(error);
                reject(error);
            },
            (_t,success)=>
            {
                console.log("Tabla Creada");
                resolve(success);
            }
        );
    });
};




//Agregar Password por defecto
const setupPasswordAsync = async() =>
{
    return new Promise((resolve, reject)=>{
        db.transaction(
            (tx)=>
            {
                tx.executeSql("insert into password (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones) values(?,?,?,?,?,?);",
                ["Doberkey",
                "admin",
                "password",
                "correo@dober.com",
                "facebook.com",
                "Primera contraseña",
                ]);
                //console.log("Insertando");
            },
            (_t, error) =>
            {
                console.log("Error al momento de insertar los valored por defecto");
                console.log(error)
            },
            (_t, success)=>
            {
                console.log("Se inserto");
                resolve(success);
            }
        );
    });
};

export const database = {
    getPassword,
    insertPassword,
    dropDatabaseTableAsync,
    setupDataBaseTableAsync,
    setupPasswordAsync,
    getPasswordById,
    updatePassword,
};