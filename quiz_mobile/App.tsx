import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, ScrollView, StyleSheet, Text, Image } from 'react-native';
import styled from "@emotion/native"

const ViewContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const Input = styled.TextInput`
flex: 1;
// width: 100%;
`
const CodeCampImage = styled.Image`
  width: 200px;
  height: 200px;
  background: #fff;
`

export default function App() {
  return (
    // Scroll 가능하게끔 만들어줍니다.
    <ViewContainer>
        {/* <View style={styles.container}> */}
          <Text style={{fontWeight: "bold"}}>코드켐프</Text>
          <Image style={{width: 200, height: 200, backgroundColor: "red"}}  source={require('./assets/codecamp.png')} />
            <Input placeholder='아이디' style = {{width: "100%",height: 200, borderStyle:"solid" , borderColor:"lightgray", backgroundColor: "white"}}/>
            <Input placeholder='비밀번호' style = {{width: "100%", height: 200, borderStyle:"solid" , borderColor:"lightgray", backgroundColor: "white"}}/>
          <TouchableOpacity style={{width: "100%", height: 200, backgroundColor: "green"}}><Text>로그인</Text></TouchableOpacity>
          <Text style={{width: "100%", height: 200, backgroundColor: "yellow"}}>아이디 찾기</Text>
          <Text style={{width: "100%", height: 200, backgroundColor: "yellow"}}>비밀번호 찾기</Text>
        {/* </View> */}
    </ViewContainer>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
