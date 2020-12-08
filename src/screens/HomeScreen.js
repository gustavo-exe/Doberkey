import {Container,  Header, Content,Spinner ,Card, CardItem, Body,H1,List,Text,View, ListItem, Item} from "native-base";
import React , {useContext, useEffect, useState} from "react";
import {Dimensions,Button,StyleSheet } from "react-native";
import {PasswordContext} from "../context/PasswordContext";


const {width, height} = Dimensions.get("window");

const Home = ({navigation})=>
{
    
    const { passwords } = useContext(PasswordContext);
    console.log("Home:");
    console.log(passwords);
    //console.log(passwords.length);
    const [cantidadDeClaves, setCantidadDeClaves] = useState(0);
    
    if (!passwords) {
        return (
          <View style={styles.spinner}>
            <Spinner color="#731F0A" />
          </View>
        );
      }

        return(
            <View style={styles.contenedorPrincipal} >
                
                <View style={styles.topGreen}>
                    <Text style={styles.saludo} >Hola, ¿cuantas guardaremos?</Text>
                    <Text style={{color:'#B6B27F', margin:'4%'}} > {passwords.length} Claves Guardadas</Text>
                    <Button color="#CAA648" onPress={() => navigation.navigate('DoberkeyFormScreen', {})} title="Añadir Clave"></Button>
                </View>
    
                <View style={styles.contenedorMiddle}>
                    
                    <View style={styles.verdeIndex} >
                        <View style={styles.blancoIndex} >    
                        </View>
                    </View>
                
                
                <Content  style={styles.contenedorTarjetas} >
                    <List style={styles.listaMargen} >
                    {passwords ? passwords.map((password)=>(
                        <Card key={password.id.toString()} style={styles.elementoCard} >
                            <CardItem  bordered style={styles.itemSitio} >
                                        <Text  style={styles.sitio}>
                                            {password.nombreDelSitio} {"\n"}
                                        </Text>
                            </CardItem>
                            
                            <CardItem style={styles.detalles} >
                                <Body >
                                <Text  >
                                    <Text style={styles.detalle} >
                                        Usuario: 
                                    </Text>
                                    {password.usuario} {"\n"}
                                    <Text style={styles.detalle} >
                                        Observacion: 
                                    </Text>
                                    {password.observaciones}
                                </Text>
                                </Body>

                            </CardItem>
                           
                            
                        </Card>
                    )):null}  
                    </List>

                </Content>
                </View>
            </View>
        )
};

const styles = StyleSheet.create({
    spinner:
    {
        flex: 1, 
        justifyContent: "center" 
    },
    contenedorPrincipal:
    {
        flex:1, 
        backgroundColor:'#fff'
    },
    topGreen:
    {   flex:0.3, 
        alignItems:'center',
        padding:'5%',
        borderBottomLeftRadius:40,
        backgroundColor:'#5E5C00'
    },
    saludo:
    {
        color:'#fff',
        fontSize:20,
        margin:'3%' ,
        fontWeight:'bold' 
    },
    contenedorMiddle:
    {
        flex:1,position:"relative" ,
        flexDirection:'row-reverse' ,
        backgroundColor:'#fff'
    },
    verdeIndex:
    {
        right:0,
        zIndex:-2,
        position:'relative' ,
        width:50,
        height:50, 
        backgroundColor:'#5E5C00'
    },
    blancoIndex:
    {
        right:0,
        zIndex:1,
        position:'relative',
        borderTopRightRadius:40 ,
        width:50,
        height:50, 
        backgroundColor:'#fff'
    },
    contenedorTarjetas:
    {
        flex:1,
        zIndex:3,
        width:width,
        position:'relative',
        backgroundColor:'transparent',
        flexDirection:'column'
    },
    listaMargen:
    {
        margin:'10%'
    },
    elementoCard:
    {
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
        elevation: 24,marginBottom:'10%'
    },
    itemSitio:
    {
        top:10 ,
        borderColor:'#CE7B1C', 
        borderRadius:20
    },
    sitio:
    {
        fontSize:20,
        height:30 ,
        fontWeight:'bold'
    },
    detalles:
    {
        borderRadius:20, 
        marginTop:10
    },
    detalle:
    {
        fontWeight:'bold'
    },
});

export default Home;