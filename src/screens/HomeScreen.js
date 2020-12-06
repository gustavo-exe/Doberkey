import {Container,  Header, Content, Card, CardItem, Body,H1,List,Text,View, ListItem, Item} from "native-base";
import React , {useContext, useEffect, useState} from "react";
import {Dimensions,Button } from "react-native";
import {PasswordContext} from "../context/PasswordContext";


const {width, height} = Dimensions.get("window");

const Home = ({navigation})=>
{
    
    const { passwords } = useContext(PasswordContext);
    console.log("Home:");
    console.log(passwords);
    //console.log(passwords.length);
    const [cantidadDeClaves, setCantidadDeClaves] = useState(0);
    
/* useEffect(()=>
{
    //if (!passwords)    console.log(passwords.length);
    setCantidadDeClaves(passwords.length);
},[]) */

        return(
            <View style={{flex:1, backgroundColor:'#fff'}} >
                
                <View style={{flex:0.3,alignItems:'center',padding:'5%',borderBottomLeftRadius:40 ,backgroundColor:'#5E5C00'}}>
                    <Text style={{color:'#fff',fontSize:20,margin:'3%' ,fontWeight:'bold' }} >Hola, ¿cuantas guardaremos?</Text>
                    <Text style={{color:'#B6B27F', margin:'4%'}} > {cantidadDeClaves} Claves Guardadas</Text>
                    <Button color="#CAA648" title="Añadir Clave"></Button>
                </View>
    
                <View style={{flex:1,position:"relative" ,flexDirection:'row-reverse' ,backgroundColor:'#fff'}}>
                    
                    <View style={{right:0,zIndex:-2,position:'relative' ,width:50,height:50, backgroundColor:'#5E5C00'}} >
                        <View style={{right:0,zIndex:1,position:'relative',borderTopRightRadius:40 ,width:50,height:50, backgroundColor:'#fff'}} >    
                        </View>
                    </View>
                
                
                <Content  style={{flex:1,zIndex:3,width:width,position:'relative',backgroundColor:'transparent',flexDirection:'column' }} >
                    <List style={{margin:'10%'}} >
                    {passwords ? passwords.map((password)=>(
                        <Card key={password.id.toString()} style={{backgroundColor:'#ffffff', borderRadius:20,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        
                        elevation: 24,marginBottom:'10%'}} >
                            <CardItem  bordered style={{top:10 ,borderColor:'#CE7B1C', borderRadius:20}} >
                                        <Text  style={{fontSize:20,height:30 ,fontWeight:'bold'}}>
                                            {password.nombreDelSitio} {"\n"}
                                        </Text>
                            </CardItem>
                            
                            <CardItem style={{ borderRadius:20, marginTop:10}} >
                                <Body >
                                <Text  >
                                    <Text style={{fontWeight:'bold'}} >
                                        Usuario: 
                                    </Text>
                                    {password.usuario} {"\n"}
                                    <Text style={{fontWeight:'bold'}} >
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

export default Home;