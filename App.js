import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import io from 'socket.io-client';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '192.168.0.11',
      disabled: true
    }
    this.state.socket = io('http://' + this.state.ip + ':3000/');
    this.state.socket.emit('button-press', {button:'1'});
  }

  boton = () => {
    console.log('boton');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Text style={{ backgroundColor: '#1976d2', fontSize: 40, padding: 10, paddingTop: 30, color: '#fff', width: '100%' }}>ADAM</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput editable={!this.state.disabled} style={{ paddingLeft: 10, width: '80%', borderBottomColor: '#e0e0e0', borderBottomWidth: 1 }} 
              onChangeText={(text) => {
                this.setState({ip: text})
              }}
              value={this.state.ip}/>
            <Button title={this.state.disabled ? 'EDITAR' : 'ACEPTAR'} onPress={() => {
              if (!this.state.disabled)
                this.state.socket = io('http://' + this.state.ip + ':3000/');
              this.setState({ disabled: !this.state.disabled });
            }} />
          </View>
        </View>
        <View style={{ width: '100%', aspectRatio: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'1'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'1'})}>
            <Text style={{ textAlign: 'center' }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'up'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'up'})}>
            <Text style={{ textAlign: 'center' }}>up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'2'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'2'})}>
            <Text style={{ textAlign: 'center' }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'left'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'left'})}>
            <Text style={{ textAlign: 'center' }}>left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'center'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'center'})}>
            <Text style={{ textAlign: 'center' }}>center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'right'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'right'})}>
            <Text style={{ textAlign: 'center' }}>right</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'3'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'3'})}>
            <Text style={{ textAlign: 'center' }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'down'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'down'})}>
            <Text style={{ textAlign: 'center' }}>down</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.boton} 
            onPressIn={()=>this.state.socket.emit('button-press', {button:'4'})}
            onPressOut={()=>this.state.socket.emit('button-release', {button:'4'})}>
            <Text style={{ textAlign: 'center' }}>4</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boton: {
    backgroundColor: '#e0e0e0',
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
