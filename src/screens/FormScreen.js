import React , {useContext, useEffect, useState} from "react";
import { Alert, StyleSheet } from "react-native";
import { Container, Content, H1, Input, Item, Text, Form, Label, Button, ListItem,Icon ,Left} from "native-base";
import {PasswordContext} from "../context/PasswordContext";


const FormScreen = ({navigation}) => {
    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [interruptor, setInterruptor] = useState(true);

    const passwordContext = useContext(PasswordContext);
    //aqui falta un valor  no estoy seguro
    const {addNewPassword, refreshPasswords} = passwordContext;

    const handlerNewPassword = () => {
        addNewPassword(sitio, usuario, contraseña, correo, enlace, observacion, refreshPasswords);

        // Go back para volver a la pantalla anterior
        navigation.goBack();
    }
    const visulizarContraseña = async () =>
    {
        if (interruptor)
        {
            setInterruptor(false);
            setVerContraseña(true);
        }
        else
        {
            setInterruptor(true);
            setVerContraseña(false);
        } 
        
    };

    return(
        
            <Container style={{flex:1, justifyContent:'space-between', flexDirection:'column', padding:'5%'}} >
                <H1 style={{textAlign: "center"}}>Ingrese los datos</H1>
                
                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Nombre del sitio</Label>
                        <Input value={sitio} onChangeText={setSitio}/>
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Usuario</Label>
                        <Input value={usuario} onChangeText={setUsuario}/>
                    </Item>


                    <Item icon onPress={visulizarContraseña} floatingLabel style={{borderColor: '#5E5C00'}}>
                        
                        <Label>Contraseña</Label>
                        <Input secureTextEntry={verContraseña ? true : false } value={contraseña} onChangeText={setContraseña}/>
                        <Icon name="eye" />
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Correo</Label>
                        <Input value={correo} onChangeText={setCorreo}/>
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Enlace</Label>
                        <Input value={enlace} onChangeText={setEnlace}/>
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Observaciones</Label>
                        <Input value={observacion} onChangeText={setObservacion}/>
                    </Item>

                    <Button rounded warning onPress={handlerNewPassword}>
                        <Text>Guardar</Text>
                    </Button>
        
            </Container>
       
    )
}

export default FormScreen;