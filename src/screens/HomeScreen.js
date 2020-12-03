import {Content,H1} from "native-base";
import React , {useEffect, useState} from "react";
import {Button } from "react-native";
const Home = ({navigation})=>
{
    return(
        <Content>
            <H1>HOME</H1>
            <Button title="Form" onPress={ () => navigation.navigate('DoberkeyFormScreen',{})} />
            <Button title="View" onPress={ () => navigation.navigate('DoberkeyViewScreen',{})} />
        </Content>
    )
}

export default Home;