import { StatusBar } from 'expo-status-bar';
import {Pressable,TouchableOpacity, ScrollView, StyleSheet, Text, View,TextInput,Image } from 'react-native';
// 우리가 작성한 것들은 모두 import 해야 합니다.
import styled from "@emotion/native"
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import {WebView} from "react-native-webview"

const ViewContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
`

const SubTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
`

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  margin: 20px;
  padding: 10px;
`

const MoveScreen = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const Storage = styled.Pressable`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`

const TouchableTitle = styled.Text`
  color: white;
`

export default function Screen1({navigation}) {

  const [value, setValue] = useState("")

  const onChangeInput = (event: any) =>{
    console.log(event.nativeEvent.text)
    setValue(event.nativeEvent.text)
  }

  // 저장 데이터
  const storeDate= async ()=> {
    try {
      await AsyncStorage.setItem('inputData',value)
      console.log("등록완료")
      console.log(value)
    }catch(error){
      console.log(error)
      // error reading value
    }
  }

  return (
    // Scroll 가능하게끔 만들어줍니다..
      <WebView source={{uri:"https://chihun.shop"}} />
  //   <ViewContainer>
  //   <Title>프론트엔드 6기</Title>
  //   <SubTitle>리액트 네이티브 2일차</SubTitle>
  //   <Input onChange={onChangeInput} />
  //   <MoveScreen onPress={()=>navigation.navigate("screen2",{isEdit: true})} ><TouchableTitle>스택 이동</TouchableTitle></MoveScreen>
  //   <Storage onPress={storeDate}><Text>스토리지 저장</Text></Storage>
  // </ViewContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
