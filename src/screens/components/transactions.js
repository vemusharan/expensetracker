import React from 'react';
import {StyleSheet,View,Button,Text,FlatList,ScrollView} from 'react-native';


const Transactions = (props) => {
    const transactions = props.data;
 

return(
  <FlatList 
        data={transactions}
        // keyExtractor={(data) => data.id}
        renderItem ={
            ({item}) => {
                return (
                    <ScrollView> 
                    <View style={style.container}>  
                    <View style={style.price}> 
                    <Text style={{fontSize:23, fontWeight:'900',color:'purple'}}> $ {item.amount} </Text>
                </View>
                <View style={style.details}> 
                    <Text style={{fontWeight:'bold',color:'purple'}}>{item.title}</Text>
                     <Text style={{color:'grey'}}>{item.date.toDateString()} </Text>
                </View> 
                </View>
                </ScrollView>
                )
            }
        }
        />
    )
}

const style = StyleSheet.create({
    container:{
        margin:3,
        // backgroundColor:"aliceblue",
        padding:3,
        flexDirection:'row',
    },
    price:{
        // backgroundColor:'red',
        borderColor:'thistle',
        borderRadius:5,
        borderWidth:3,

    },
    details:{
        // backgroundColor:'blue',
        paddingLeft:10,
        marginLeft:10,

    }
})

export default Transactions;