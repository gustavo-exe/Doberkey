import React , {useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import { Container, Content, H1, Input, Item, Text, Form, Label, Button, ListItem, Left} from "native-base";


const FormScreen = ({navigation}) => {
    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");

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

                    <Button rounded warning>
                        <Text>Guardar</Text>
                    </Button>
        
            </Container>
        </Content>
    )
}

export default FormScreen;