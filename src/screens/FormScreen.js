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
    const [interruptor, setInterruptor] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [enableSave, setEnableSave] = useState(true);    
    const [errorSitio, setErrorSitio] = useState(false); 
    

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
            
        }
    };

    const visulizarContraseña = async () =>
    {
        if (interruptor)
        {
            setInterruptor(false);
            setVerContraseña(false);
        }
        else
        {
            setInterruptor(true);
            setVerContraseña(true);
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
                
                    <Item floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        <Label>Nombre del sitio</Label>
                        <Input value={sitio} 
                        onChangeText={setSitio} 
                        />
                    </Item>
                    
                    

                    <Item floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        <Label>Usuario</Label>
                        <Input value={usuario} 
                        onChangeText={setUsuario} 
                        />
                    </Item>
                   

                    <Item icon onPress={visulizarContraseña} floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        
                        <Label>Contraseña</Label>
                        <Input secureTextEntry={verContraseña ? false : true } 
                        value={contraseña} 
                        onChangeText={setContraseña}/>
                        <Icon name="eye" />
                    </Item>
                    

                    <Item floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        <Label>Correo</Label>
                        <Input value={correo} 
                        onChangeText={setCorreo}/>
                    </Item>
                    

                    <Item floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        <Label>Enlace</Label>
                        <Input value={enlace} 
                        onChangeText={setEnlace}/>
                    </Item>
                    

                    <Item floatingLabel style={errorSitio ? styles.inputError : styles.inputCorrect}>
                        <Label>Observaciones</Label>
                        <Input value={observacion} 
                        onChangeText={setObservacion}/>
                    </Item>

                    { errorSitio ? <Text style={styles.error}>¡No debes dejar campos vacios!</Text> : null}
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
        borderColor: 'red',
    },
    button:{
        fontFamily: "Roboto",
        backgroundColor:'#CAA648',
    },
    textButton:{
        fontWeight: "bold", 
        fontSize: 20,
    },
    inputCorrect:{
        borderColor: '#5E5C00',  
    }
    
})


export default FormScreen;