import React from "react";
import * as SQLite from "expo-sqlite";
import { LogBox } from "react-native";

//expo install expo-sqlite
//Crear y abrir la base de datos
const db = SQLite.openDatabase("doberkey.db");

//Crear la tabla de password
const setupDataBaseTableAsync = async()=>
{
    return new Promise((resolve,reject)=>
    {
        db.transaction(
            (tx) =>
            {
                tx.executeSql("create table if not exists password(id integer not null primary key autoincrement, nombreDelSitio TEXT NOT NULL, usuario TEXT NOT NULL, contraseña TEXT NOT NULL, correo TEXT, enlace TEXT, observaciones TEXT )");
            },
            (_t,error)=>
            {
                console.log("Error al crear una tabla.")
                console.log(error);
                reject(error);
            },
            (_t,success)=>
            {
                resolve(success);
            }
        );
    });
};

//Insertando datos a la tabla password
const insertPassword = (password, successFunc) => {
    db.transaction((tx) =>{
        tx.executeSql("insert into password (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones) values (?, ?, ?, ?, ?, ?)", [password])
    },
    (_t, error) => {
        console.log("Error al insertar en la tabla password");
        console.log(error);
    },
    (_t, _success) => {
        successFunc;
    }
    );
}

//Obtener los datos del usuario
const getPassword = (setPasswordFunc) => {
    db.transaction((tx) =>{
        tx.executeSql("select * from password", [], (_, {rows: {_array}}) => {
            setPasswordFunc(_array);
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
}

//Borrar la base de datos
const dropDatabaseTableAsync = async() =>
{
    return new Promise((resolve,reject)=>
    {
        db.transaction(
            (tx)=>
            {
                tx.executeSql("drop table password");
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

//Agregar Password por defecto
const setupPasswordAsync = async() =>
{
    return new Promise((resolve, reject)=>{
        db.transaction(
            (tx)=>
            {
                tx.executeSql("insert into password (nombreDelSitio, usuario, contraseña, correo, enlace, observaciones) values(?,?,?,?,?,?)",[
                    "Doberkey",
                    "user",
                    "lol",
                    "correo@gmail.com",
                    "doberkey.com",
                    "Creacion de tabla por defecto",
                ]);
            },
            (_t, error) =>
            {
                console.log("Error al momento de insertar los valored por defecto");
                console.log(error)
            },
            (_t, success)=>
            {
                resolve(success);
            }
        );
    });
};

export const database = {
    setupDataBaseTableAsync,
    insertPassword,
    dropDatabaseTableAsync,
    getPassword,
    setupPasswordAsync,
    setupPasswordAsync,
}