import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground } from 'react-native';
import MsgItem from './src/MsgItem';

export default class TelaChat extends Component{
  constructor(props){
    super(props);
    this.state = {
      chat:[
        {key:'1', nome:'Pedro', msg:'Oi', m:true },
        {key:'2', nome:'Laura', msg:'Olá', m:false },
        {key:'3', nome:'Pedro', msg:'Tudo bem?', m:true },
        {key:'4', nome:'Laura', msg:'Tudo sim e você?', m:false },
        {key:'5', nome:'Pedro', msg:'Bem também!', m:true },
        {key:'6', nome:'Laura', msg:'Eu soube que você está fazendo apps. Gostaria de saber quanto cobra para o meu pequeno negócio', m:false },
        {key:'7', nome:'Pedro', msg:'Primeiramente, é preciso analisar o tipo de negócio e a aplicação. Após isso, mande um email para pedrogoncalvesdemarchi@gmail.com para mandar a proposta completa', m:true },
        {key:'8', nome:'Laura', msg:'Ok, estarei entrando em contato brevemente, portanto', m:false },
        {key:'9', nome:'Laura.', msg:'Grata.', m:false }
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
          <FlatList
            data={this.state.chat}
            renderItem={({item})=> <MsgItem data={item} />}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS=="ios") ? 20 : 0
  },
  chat:{
    flex:1
  }
});