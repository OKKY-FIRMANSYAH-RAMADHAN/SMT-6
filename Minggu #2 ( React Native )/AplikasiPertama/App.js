import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={Styles.text}> Styling Component </Text>
      <View style={{width: 100,height: 100,backgroundColor: '#0abde3',borderWidth: 2,borderColor: 'purple',marginTop: 20,marginLeft: 20,}}/>
      <View style={{padding: 12,backgroundColor: '#f2f2f2',width: 212,borderRadius: 8}}>
        <Image source={macbook}style={{width: 188,height: 107,borderRadius: 8,}}/>
        <Text style={{fontSize: 14,fontWeight: 'bold',marginTop: 16,}}>New Macbook Pro 2020</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold',color: '#f2994a',marginTop: 12}}>Rp.20.000 .000</Text>
        <Text style={{fontSize: 12,fontWeight: '300',marginTop: 12}}>Sidoarjo</Text>
        <View style={{backgroundColor: '#6fcf97',paddingVertical: 6,borderRadius: 25,marginTop: 20}}>
          <Text style={{fontSize: 14,fontWeight: '600',color: 'white',textAlign: 'center'}}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'lightgreen',
    marginLeft: 20,
    marginTop: 40,
  },
});

const SampleComponenct = () => {
  return (
    <View>
      <View style={{width: 100,height: 100,backgroundColor: '#0abde3',}}/>
      <Text> Okky </Text> 
      <Firmansyah />
      <Text> Muli </Text> 
      <Text> Aber </Text> 
      <Photo />
      <TextInput style={{borderWidth: 1,marginTop: 10,}}/>
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Firmansyah = () => {
  return <Text> Firmansyah Ramadhan </Text>;
};

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}}style={{width: 100,height: 100,}}/>
};

class BoxGreen extends Component {
  render() {
    return <Text> Ini Component Dari Class </Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View><Image source={{uri: 'https://placeimg.com/100/100/animals'}}style={{width: 100,height: 100,borderRadius: 50}}/>
        <Text> Ini Gambar Hewan </Text>
      </View>
    );
  }
}

export default App;
