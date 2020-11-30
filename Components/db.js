import React from "react";
import * as SQLite from "expo-sqlite";

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
            (_,result) =>
            {
                resolve(result);
            },
            (_,error)=>
            {
                console.log("Error al eliminar la tabla de password");
                reject(error);
            }
        );
    });
};