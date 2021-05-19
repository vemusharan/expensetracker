import React,{useState} from 'react';
import {StyleSheet,View} from 'react-native';
import {FAB,Modal,Portal,Text,TextInput,Provider,Button,Headline} from 'react-native-paper';
import { DatePickerModal } from "react-native-paper-dates";
import Moment from 'react-moment';

const ButtonScreen = (props) => {
    const [visible,setVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date, setDate] = useState(new Date());
    const [open,setOpen] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
      }, [setOpen]);
    
      const onConfirmSingle = React.useCallback(
        (params) => {
          setOpen(false);
          setDate(params.date);
        },
        [setOpen, setDate]
      );

    return (
        <Provider>   
            <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={style.containerStyle}>
            <View>
            
            <TextInput style={{padding:10}} type='flat'  label="Expense Title" value={title} onChangeText={text => setTitle(text)} />
            <TextInput style={{padding:10, marginTop:10}}  type='flat'  label="Amount" value={amount} onChangeText={text => setAmount(text)} />
            <Button style={{padding:10, marginTop:10}} color='purple'  mode = 'outlined' onPress = {() => setOpen(true)} > Select Date </Button> 
            
        
        
             <Headline style={{color:'purple', borderColor:'grey' , borderWidth:1, marginTop:10}}> Selected Date : {date.toDateString()} </Headline>
             <Button style={{padding:10, marginTop:10}} color='purple'  mode = 'contained' onPress={()=> { setVisible(false) ,props.onSubmit(title,amount,date) }} > Submit </Button> 
            <DatePickerModal
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
           
            </View>
            
   
        </Modal>
      </Portal>
            <FAB label='+' style={style.fab} color='white' onPress={showModal} />
        </Provider>
    )
}


const style = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
    },

    fab:{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'purple',
    fontSize:20,
    },
    containerStyle :{
        backgroundColor: 'white',
        padding: 20,
    },

})


export default ButtonScreen;