import { StatusBar } from 'expo-status-bar';
import {Pressable,TouchableOpacity, ScrollView, StyleSheet, Text, View,TextInput,Image } from 'react-native';
// 우리가 작성한 것들은 모두 import 해야 합니다.
import styled from "@emotion/native"
import Navigation from './pages/navigation';

const ViewContainer = styled.View`
  flex: 1;
  background-color: pink;
`
const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`
const Input = styled.TextInput`
  // width: 100%;
`
const CodeCamp = styled.Text`
  font-weight: 900;
`
// 이게 View이니까 그 안에 view가 없어야 합니다.

export default function App() {

  return (
    // Scroll 가능하게끔 만들어줍니다.
    // <ScrollView>
    //   <ViewContainer>
    //     {/* <View style={styles.container}> */}
    //       <Text>안녕하세요!!!!</Text>
    //       <Image style={{width: 200, height: 200, backgroundColor: "red"}}  source={require('./assets/splash.png')} />
    //       <Text>환영합니다! 프론트엔드 6기입니다.<Text style={{fontWeight: "800"}}>123</Text></Text>
    //       <View style={{width: "100%", flex: 1, backgroundColor: "black"}}>
    //         <Text>환영합니다! 프론트엔드 6기입니다.<Text style={{fontWeight: "800"}}>123</Text></Text>
    //         <Text>123</Text>
    //         <TextInput onChange={onChangeInput} style = {{width: "90%",borderStyle:"solid" , borderColor:"white", backgroundColor: "lightgreen"}}/>
    //       </View>
    //       {/* 여기서 주의해서 보는 것은 flex */}
    //       {/* Scrollview 도 알아봅시다. */}
    //       <View style={{width: "100%", flex: 3, backgroundColor: "white"}} ></View>
    //       <StatusBar style="auto" />
    //       {/* 버튼 */}
    //       <TouchableOpacity style={{width: "100%"}}><Text>로그인</Text></TouchableOpacity>
    //       {/* 새로운 버튼 */}
    //       <Pressable style={{width: "100%"}}><Text>로그인</Text></Pressable>
    //     {/* </View> */}
    //   </ViewContainer>
    // </ScrollView>
      <Navigation/>
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
