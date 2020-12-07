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

    
        return(
            <View style={{flex:1, backgroundColor:'#fff'}} >
                
                <View style={{flex:0.3,alignItems:'center',padding:'5%',borderBottomLeftRadius:40 ,backgroundColor:'#5E5C00'}}>
                    <Text style={{color:'#fff',fontSize:20,margin:'3%' ,fontWeight:'bold' }} >Hola, Lorem Impun</Text>
                    <Text style={{color:'#B6B27F', margin:'4%'}} >3 Claves Guardadas</Text>
                    <Button color="#CAA648" onPress={() => navigation.navigate('DoberkeyFormScreen', {})} title="Añadir Clave"></Button>
                </View>
    
                <View style={{flex:1,position:"relative" ,flexDirection:'row-reverse' ,backgroundColor:'#fff'}}>
                    
                    <View style={{right:0,zIndex:-2,position:'relative' ,width:50,height:50, backgroundColor:'#5E5C00'}} >
                        <View style={{right:0,zIndex:1,position:'relative',borderTopRightRadius:90 ,width:50,height:50, backgroundColor:'#fff'}} >    
                        </View>
                    </View>
                
                
                <Content style={{flex:1, zIndex:3,width:width,position:'relative',backgroundColor:'transparent',flexDirection:'column' }} >
                    <List style={{margin:'10%'}} >
                    {passwords ? passwords.map((password)=>(
                        <Card style={{backgroundColor:'#ffffff',shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        
                        elevation: 24, marginBottom:'10%'}} >
                            
                            <CardItem style={{marginTop:10}} >
                                <Body key={password.id.toString()}>
                                <Text>
                                    <Text style={{fontSize:40, weight:'90%' ,fontWeight:'bold'}}>
                                        {password.nombreDelSitio} {"\n"}
                                    </Text>
                                </Text>
                                <Text key={password.id.toString()} >
                                    <Text>
                                        Usuario: {password.usuario} {"\n"}
                                    </Text>
                                    <Text>
                                        Observacione: {password.observaciones}
                                    </Text>
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