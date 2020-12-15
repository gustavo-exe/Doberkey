import React , {useContext, useEffect, useState} from "react";
import { Alert, StyleSheet,Dimensions } from "react-native";
import { Container, Content, View,H1, Button, Input, Card, CardItem, Item, Text, Form, Label,ListItem,Icon ,Left} from "native-base";
import {PasswordContext} from "../context/PasswordContext";
const {width, height} = Dimensions.get("window");

const ViewInformation = ({route,navigation})=>
{
    const { id }= route.params;
    console.log("Id de password:");
    console.log(id);

    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setTheCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [interruptor, setInterruptor] = useState(true);

    const passwordContext = useContext(PasswordContext);

    //Traer loc omponentes para actulizar la nota
    const {onePassword, getPasswordById} = passwordContext;

    const [thePassword, setThePassword] = useState(null);


useEffect(()=>
{
   
        const getPassword = () =>
        {
            getPasswordById(id);
        };
   

    getPassword();

    if(onePassword.length)
    {
        setThePassword(onePassword);
        //setContraseña(password[0].contraseña);
        setTheCorreo(onePassword[0].correo);
        //console.log("El que te llego:");
        //console.log(onePassword);
    }

},[id, onePassword]);
    

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
        <Content style={{flex:1,  }} >
            
            <View style={{ height:height * 0.70, margin:'10%', backgroundColor:'#ffffff', 
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: 
            {
                width: 0,
                height: 12,
            },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,            
        elevation: 10,
        padding:'5%' ,display:"flex",flexDirection:'column'}} >
                
                    <View>                   
                    <H1 style={{color: '#731F0A'}}>Facebook</H1>
                    <Text>gustavo.exe</Text>
                    </View>
                   
                    <View style={{flex:1, justifyContent:'space-around'}} >
                    <Item icon onPress={visulizarContraseña} floatingLabel style={{borderColor: '#5E5C00'}}>
                        
                        <Label>Contraseña</Label>
                        <Input secureTextEntry={verContraseña ? true : false } value={contraseña} onChangeText={setContraseña}/>
                        <Icon name="eye" />
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Correo</Label>
                        <Input value={correo} onChangeText={setTheCorreo}/>
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Enlace</Label>
                        <Input value={enlace} onChangeText={setEnlace}/>
                    </Item>

                    <Item floatingLabel style={{borderColor: '#5E5C00'}}>
                        <Label>Observaciones</Label>
                        <Input value={observacion} onChangeText={setObservacion}/>
                    </Item>
                    </View>
            </View>
            <View style={{ display:'flex',flexDirection:'row', justifyContent:'center',marginTop:'3%'}} >  
                <Button rounded  style={{ backgroundColor:'#CAA648' ,justifyContent:"center",display:'flex',flexDirection:'row',width:'90%'}} ><Text>Editar</Text></Button>
            </View>

            
        </Content>
    )
}

export default ViewInformation;
//<Button rounded  style={{ backgroundColor:'#CAA648' ,justifyContent:"center",display:'flex',flexDirection:'row',width:'90%'}} ><Text>Editar</Text></Button>

/**
 * 
 */