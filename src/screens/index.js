import React,{useState} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

import Transactions from './components/transactions';
import ButtonScreen from './components/button';
import { set } from 'react-native-reanimated';



const IndexScreen = (navigation) => {

    

    var transactions =  [{
        "id":'tran1',
        "title": 'Rice bag',
        "amount":17,
        "date": new Date(),
    },
    {
        "id":'tran2',
        "title": 'Groceries',
        "amount":25,
        "date": new Date(),
    },
    {
        "id":'tran3',
        "title": 'House Rent',
        "amount":250,
        "date": new Date(),
    },
    {
        "id":'tran4',
        "title": 'AOK',
        "amount":105,
        "date": new Date(),
    },
    ]
const [trans,setTrans]= useState(transactions);
console.log(trans);

    return (
        
    <View style={{flex:1}} >
        <View style={style.chart}> 
        <Text>Chart</Text>
        </View>

        <View style={style.container}>
        <Text  style={style.textstyle}> List of Transactions</Text>
        <Transactions data = {trans}/>
        <ButtonScreen  onSubmit={ (title,amount,date) => setTrans([...trans,{"id": title+date+amount,"title":title ,"amount":amount,"date":date}])}   />
        </View>
       
        </View>
    )
}


const style = StyleSheet.create({
    title: {
    fontSize: 24 ,
    fontWeight: 'bold',            
    },
    chart:{
        // borderColor:'red',
        backgroundColor:'green',
        borderRadius:2,
        margin:3,
    },

    container:{
        flex:1,
        marginTop:15,
        // backgroundColor:'red',
        borderRadius:2,
        borderColor:'orange',
        margin:3,

    },
    textstyle:{
        fontWeight:'bold',
        color:'purple',
        fontSize:20,
        paddingBottom:10,
    }

  
});

export default IndexScreen;