import React, {useEffect, useState} from "react";
import { database } from "../components/db";

const useDatabase = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const loadDatabase = async () => {
        try {
            await database.setupDataBaseTableAsync();

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