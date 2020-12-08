import React , {useContext, useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import { Container, Content, H1, Input, Item, Text, Form, Label, Button, ListItem, Left} from "native-base";
import {PasswordContext} from "../context/PasswordContext";


const FormScreen = ({navigation}) => {
    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");

    const passwordContext = useContext(PasswordContext);
    //aqui falta un valor  no estoy seguro
    const {addNewPassword, refreshPasswords} = passwordContext;

    const handlerNewPassword = () => {
        addNewPassword(sitio, usuario, contraseña, correo, enlace, observacion, refreshPasswords);

        // Go back para volver a la pantalla anterior
        navigation.goBack();
    }

    return(
        <Content>
            <Container>
                <H1 style={{textAlign: "center"}}>Ingrese la contraseña</H1>
                
                    <Item style={{borderColor: '#5E5C00', borderRadius: 20}}>
                        <Input placeholder= "Nombre del sitio" value={sitio} onChangeText={setSitio}/>
                    </Item>

                    <Item style={{borderColor: '#5E5C00'}}>
                        <Input placeholder= "Usuario" value={usuario} onChangeText={setUsuario}/>
                    </Item>


                    <Item style={{borderColor: '#5E5C00'}}>
                        <Input placeholder= "Contraseña" value={contraseña} onChangeText={setContraseña}/>
                    </Item>

                    <Item style={{borderColor: '#5E5C00'}}>
                        <Input placeholder= "Correo" value={correo} onChangeText={setCorreo}/>
                    </Item>

                    <Item style={{borderColor: '#5E5C00'}}>
                        <Input placeholder= "Enlace" value={enlace} onChangeText={setEnlace}/>
                    </Item>

                    <Item style={{borderColor: '#5E5C00'}}>
                        <Input placeholder= "Observaciones" value={observacion} onChangeText={setObservacion}/>
                    </Item>

                    <Button rounded warning onPress={handlerNewPassword}>
                        <Text>Guardar</Text>
                    </Button>
        
            </Container>
        </Content>
    )
}

export default FormScreen;