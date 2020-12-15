import { Button, Content,Card, CardItem, Body,List,Text,View,  Icon} from "native-base";
import React , {useContext} from "react";
import {Dimensions,StyleSheet } from "react-native";
import {PasswordContext} from "../context/PasswordContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const {width, height} = Dimensions.get("window");

const Home = ({navigation})=>
{
    
    const { passwords } = useContext(PasswordContext);
    console.log("Home:");
    console.log(passwords);
    //console.log(passwords.length);
    //const [cantidadDeClaves, setCantidadDeClaves] = useState(0);
  

        return(
            <View style={styles.contenedorPrincipal} >
                
                <View style={styles.topGreen}>
                    <Text style={styles.saludo} >Hola, ¿cuál guardaremos hoy?</Text>
                   
                    <View style={styles.botonIcionGreen} >
                    <Button rounded style={styles.botonPlus} onPress={() => navigation.navigate('DoberkeyFormScreen', {})}>
                        <Icon name="add" />
                    </Button>
                    </View>
                </View>
    
                <View style={styles.contenedorMiddle}>
                    
                    <View style={styles.verdeIndex} >
                        <View style={styles.blancoIndex} >    
                        </View>
                    </View>
                
                
                <Content  style={styles.contenedorTarjetas} >
                    
                    <List style={styles.listaMargen} >
                    {passwords ? passwords.map((password)=>(

                    <TouchableOpacity 
                    key={password.id.toString()}
                    style={{padding:'2%'}}
                    onPress={()=>{
                        navigation.navigate('DoberkeyViewScreen',{id: password.id});
                    }}
                    >
                        <Card 
                             
                            style={styles.elementoCard} 
                           
                        >
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
                    </TouchableOpacity>
                    )):null}  
                    </List>
                    
                </Content>
                </View>
            </View>
        )
};

const styles = StyleSheet.create({
    contenedorPrincipal:
    {
        flex:1, 
        backgroundColor:'#fff'
    },
    topGreen:
    {   flex:0.3, 
        alignItems:'center',
        padding:'5%',
        justifyContent:'space-between',
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
        elevation: 10,
        marginBottom:'10%'
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
    claves:
    {
        color:'#B6B27F', 
        margin:'4%'
    },
    botonIcionGreen:
    {
        justifyContent:"center",
        display:'flex',
        flexDirection:'row' ,
        width:'60%'
    },
    botonPlus:
    {
        width:'60%', 
        backgroundColor:'#CAA648' ,
        justifyContent:"center",
        display:'flex',
        flexDirection:'row'
    },
});

export default Home;