import {Content,H1} from "native-base";
import React , {useEffect, useState} from "react";
import {Button } from "react-native";
const View = ({navigation})=>
{
    return(
        <Content>
            <H1>HOME</H1>
            <Button title="Form" />
        </Content>
    )
}

export default View;