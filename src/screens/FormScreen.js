import React , {useContext, useEffect, useState} from "react";
import { Alert, StyleSheet } from "react-native";
import { Container, Content, H1, Input, Item, Text, Form, Label, Button, Spinner, ListItem,Icon ,Left} from "native-base";
import {PasswordContext} from "../context/PasswordContext";
import * as Font from "expo-font";


const FormScreen = ({navigation}) => {
    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [interruptor, setInterruptor] = useState(true);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [enableSave, setEnableSave] = useState(true);    
    const [errorSitio, setErrorSitio] = useState(false); 
    const [errorUsuario, setErrorUsuario] = useState(false);
    const [errorContraseña, setErrorContraseña] = useState(false); 
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorEnlace, setErrorEnlace] = useState(false);
    const [errorObservacion, setErrorObservacion] = useState(false);

    // Cargar la fuente de manera asíncrona
    useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
    }, []);

    const passwordContext = useContext(PasswordContext);
    //aqui falta un valor  no estoy seguro
    const {addNewPassword, refreshPasswords} = passwordContext;


    useEffect(() => {
        if (sitio) setEnableSave(false);
        else setEnableSave(true);
      }, [sitio]);

    const handlerNewPassword =  () => {
        //Validar que el sitio este lleno
        if (sitio && usuario && contraseña && correo && enlace && observacion ){
             addNewPassword(sitio, usuario, contraseña, correo, enlace, observacion, refreshPasswords);
             
            // Go back para volver a la pantalla anterior
            navigation.goBack();
        }else{
            setErrorSitio(true);
            setErrorUsuario(true);
            setErrorContraseña(true);
            setErrorCorreo(true);
            setErrorEnlace(true);
            setErrorObservacion(true);
        }
    };

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

    if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="#5E5C00" />
      </Content>
    );

    return(
        
            <Container style={{flex:1, justifyContent:'space-between', flexDirection:'column', padding:'5%'}} >
                <H1 style={{textAlign: "center"}}>Ingrese los datos</H1>
                
                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Nombre del sitio</Label>
                        <Input value={sitio} 
                        onChangeText={setSitio} 
                        onChange={()=> setErrorSitio('')}
                        style={errorSitio ? styles.inputError : null}/>
                    </Item>
                    { errorSitio ? (
                        <Text style={styles.error}>Debes rellenar el sitio</Text>
                     ) : null}
                    

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Usuario</Label>
                        <Input value={usuario} 
                        onChangeText={setUsuario} 
                        onChange={()=> setErrorUsuario('')}/>
                    </Item>
                    { errorUsuario ? <Text style={styles.error}>Debes rellenar el usuario</Text> : null}

                    <Item icon onPress={visulizarContraseña} floatingLabel style={{borderColor: '#5E5C00'}}>
                        
                        <Label>Contraseña</Label>
                        <Input secureTextEntry={verContraseña ? true : false } 
                        value={contraseña} 
                        onChangeText={setContraseña}
                        onChange={()=> setErrorContraseña('')}/>
                        <Icon name="eye" />
                    </Item>
                    { errorContraseña ? <Text style={styles.error}>Debes rellenar la contraseña</Text> : null}

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Correo</Label>
                        <Input value={correo} 
                        onChangeText={setCorreo}
                        onChange={()=> setErrorCorreo('')}/>
                    </Item>
                    { errorCorreo ? <Text style={styles.error}>Debes rellenar el correo</Text> : null}

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Enlace</Label>
                        <Input value={enlace} 
                        onChangeText={setEnlace}
                        onChange={()=> setErrorEnlace('')}/>
                    </Item>
                    { errorEnlace ? <Text style={styles.error}>Debes rellenar el enlace</Text> : null}

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Observaciones</Label>
                        <Input value={observacion} 
                        onChangeText={setObservacion}
                        onChange={()=> setErrorObservacion('')}/>
                    </Item>
                    { errorObservacion ? <Text style={styles.error}>Debes rellenar la observacion</Text> : null}

                    
                    <Button block  onPress={handlerNewPassword} style={styles.button}>
                        <Text style={styles.textButton}>Guardar</Text>
                    </Button>
        
            </Container>
       
    );
};

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: "center",
    },
    error:{
        fontSize: 12,
        color: "red",
    },
    inputError:{
        borderColor: "red",
    },
    button:{
        fontFamily: "Roboto",
        backgroundColor: '#5E5C00',
    },
    textButton:{
        fontWeight: "bold", 
        fontSize: 20
    },
    
})


export default FormScreen;