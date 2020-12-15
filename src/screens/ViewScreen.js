import React , {useContext, useEffect, useState} from "react";
import {StyleSheet,Dimensions } from "react-native";
import {Content, View, Button, Input, Item, Text, Label,Icon,Spinner} from "native-base";
import {PasswordContext} from "../context/PasswordContext";
const {width, height} = Dimensions.get("window");

import * as Font from "expo-font";

const ViewInformation = ({route,navigation})=>
{
    const { id }= route.params;
    console.log("Id de password:");
    console.log(id);

    const [sitio, setSitio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [observacion, setObservacion] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [interruptor, setInterruptor] = useState(false);

    const passwordContext = useContext(PasswordContext);

    //Traer loc omponentes para actulizar la nota
    const {onePassword, getPasswordById, updateOnePassword} = passwordContext;

    //Estados para la fuente
    const [fontsLoaded, setFontsLoaded] = useState(false);     
     

   
   useEffect(() => {

        //Obtener la nota
        obteniendoPassword(id, onePassword);

        //Cargar la fuente
        const loadFontsAsync = async () => {
        await Font.loadAsync({
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        }).then(() => {
            setFontsLoaded(true);
        });
        };

        loadFontsAsync();
    }, []);

//Cambiando el estado de cada uno de los campos
const obteniendoPassword = (id, onePassword)=>
{
    const getPassword = () =>
        {
            getPasswordById(id);
        };

    getPassword();

    if(onePassword.length)
    {
        setContraseña(onePassword[0].contraseña);
        setCorreo(onePassword[0].correo);
        setEnlace(onePassword[0].enlace);
        setSitio(onePassword[0].nombreDelSitio);
        setObservacion(onePassword[0].observaciones);
        setUsuario(onePassword[0].usuario);
    }
};


const handlerUpdatePassword = async () =>
{
    
    await updateOnePassword(contraseña, correo, enlace, sitio, observacion, usuario,id);
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
    <Content contentContainerStyle={styles.spinnerContent}>
        <Spinner color="#5E5C00" />
    </Content>
);

    return(
        <Content style={styles.contendor}>
            
            <View style={styles.viewCard} >
                
                    <View>
                        <Item style={styles.itemTransparent} >                   
                        	<Input onChangeText={setSitio} value={sitio} style={styles.sitio}></Input>
                        </Item>
							<Item style={styles.itemTransparent} >
							<Input onChangeText={setUsuario} value={usuario} />
                        </Item>

                   
                    </View>
                   
                    <View style={styles.viewInputs} >
						<Item icon onPress={visulizarContraseña} floatingLabel style={styles.borderInputs}>
							
							<Label>Contraseña</Label>
							<Input secureTextEntry={verContraseña ? false : true } value={contraseña} onChangeText={setContraseña}/>
                            
							<Icon name="eye" />
						</Item>

						<Item floatingLabel style={styles.borderInputs}>
							<Label>Correo</Label>
							<Input value={correo} onChangeText={setCorreo}/>
						</Item>

						<Item floatingLabel style={styles.borderInputs}>
							<Label>Enlace</Label>
							<Input value={enlace} onChangeText={setEnlace}/>
						</Item>

						<Item floatingLabel style={styles.borderInputs}>
							<Label>Observaciones</Label>
							<Input value={observacion} onChangeText={setObservacion}/>
						</Item>
                    </View>
            </View>
            <View style={styles.viewBotton} >  
                <Button onPress={handlerUpdatePassword} rounded  style={styles.bottonGuardar} ><Text>Editar</Text></Button>
            </View>

            
        </Content>
    )
};


const styles = StyleSheet.create({
	contendor:
	{
		flex:1
	},
	spinnerContent:
	{
		flex:1, 
		justifyContent: "center"
	},
	viewCard:
	{
		height:height * 0.70, 
		margin:'10%', 
		backgroundColor:'#ffffff', 
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
		padding:'5%',
		display:"flex",
		flexDirection:'column'
	},
	itemTransparent:
	{
		borderColor:'transparent'
	},
	viewInputs:
	{
		flex:1, 
		justifyContent:'space-around'
	},
	borderInputs:
	{
		borderColor: '#5E5C00'
	},
	viewBotton:
	{
		display:'flex',
		flexDirection:'row', 
		justifyContent:'center',
		marginTop:'3%'
	},
	bottonGuardar:
	{
		backgroundColor:'#CAA648',
		justifyContent:"center",
		display:'flex',
		flexDirection:'row',
		width:'90%'
	},
	sitio:
	{
		fontSize:30,
		color: '#731F0A'
	}
});

export default ViewInformation;
