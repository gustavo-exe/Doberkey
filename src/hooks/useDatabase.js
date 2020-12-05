import React, {useEffect, useState} from "react";
import { database } from "../components/db";

const useDatabase = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const loadDatabase = async () => {
        try {
            console.log("Intentando colocar:");
            //await database.dropDatabaseTableAsync();
            //await database.setupDataBaseTableAsync();
            //await database.setupPasswordAsync();
            //database.getPassword();

            setIsLoadingComplete(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        loadDatabase();
    }, []);

    return isLoadingComplete;
};

export default useDatabase;