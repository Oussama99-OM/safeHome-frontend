import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import LoginForm from './src/components/Login/LoginForm';
import RegisterForm from './src/components/Register/RegisterForm';

export default class App extends Component {
  render(){
  return (
      <RegisterForm />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});