import {Content,H1} from "native-base";
import React , {useEffect, useState} from "react";
import {Button } from "react-native";
const Form = ({navigation})=>
{
    return(
        <Content>
            <H1>Form</H1>
            <Button title="Form"/>
        </Content>
    )
}

export default Form;