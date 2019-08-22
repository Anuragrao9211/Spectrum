import React, {Component}  from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import Header from "./Header"
import Intro from "./Intro"
class Body extends Component{
  state={
    screeny:0,
    text:0,
    red:0,
    yellow:0
  }
  UNSAFE_componentWillMount(){
  }
  startGame = () => {
    let plusORminus=Math.round(Math.random()) //1 is +, 0 is -
    let factor1OR0=Math.round(Math.random())
    let totalSlides = plusORminus ? 20 + 3*factor1OR0 : 20 - 3*factor1OR0
    let valueOfSlide = []   // 0s for red, 1 for yellow
    console.log(valueOfSlide)
    for(i=0;i<totalSlides;i++){
      valueOfSlide.push(Math.round(Math.random()))
    }
    this.setState({
      totalSlides:totalSlides,
      totalYellow:valueOfSlide.reduce((a, b) => a + b, 0)
    })
    let counter = 0
      var fun = setInterval(()=>{
          this.setState({text:this.state.text+1})
          if(valueOfSlide[counter]){
            this.setState({screeny:3})
          }
          else if(valueOfSlide[counter]==0){
            this.setState({screeny:2})
          }
          if(counter == totalSlides){
            clearInterval(fun)
            console.log(this.state)
            this.setState({screeny:1})
        }
          counter ++
        }, 1000)

  }
  gameOver = () => {
    this.setState({screeny:4})
    console.log(this.state)
  }
  restartGame = () => {
    this.setState({screeny:0, text:0,red:0,yellow:0 })
    console.log(this.state)
  }
 render0(){
  return (
    <View style={Styles.mainViewStyle}>
      <Header />
      <Intro />
      <Button
        onPress={this.startGame}
        title="START GAME"
        color="#841584"
      />
    </View>
  )
 }
 render1(){
 return (
    <View style={Styles.mainViewStyle}>
      <Header />
      <Text style={Styles.text2}> How many did you see! </Text>
      <Text>{"\n"}{"\n"}</Text>
      <Text> Number of Red</Text>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingTop:10, paddingRight:5, paddingLeft:5, paddingBottom:10}}
      onChangeText={(red) => this.setState({red})}
      value={this.state.red}
      maxLength = {2}
      keyboardType='numeric'
      />
      <Text>{"\n"}{"\n"}</Text>
      <Text> Number of Yellow</Text>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(yellow) => this.setState({yellow})}
      value={this.state.yellow}
      maxLength = {2}
      keyboardType='numeric'
      />
      <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      <Button
        onPress={this.gameOver}
        title="Submit Answers"
        color="#841584"
      />
    </View>
  )
 }
 render2(){
 return (
    <View style= {{backgroundColor:"red", flex:1 , alignItems:"center", paddingTop:"50%"}}>
      <Text style={Styles.text}> {this.state.text}</Text>
    </View>
  )
 }
 render3(){
 return (
    <View style= {{backgroundColor:"yellow",flex:1, alignItems:"center", paddingTop:"50%"}}>
      <Text style={Styles.text} > {this.state.text}</Text>
    </View>
  )
 }
 render4(){
   let result;
   if(this.state.yellow==this.state.totalYellow && this.state.red == this.state.totalSlides-this.state.totalYellow){
     result = "RIGHT"
   }
   else {
     result = "WRONG"
   }
  return (
    <View style={Styles.mainViewStyle}>
      <Header />
      <Text style={Styles.text3}> GAME OVER! </Text>
      <Text style={Styles.text2}>{"\n"}You are {result}! </Text>
      <Text style={Styles.text2}>ANSWERS : </Text>
      <Text style={Styles.text2}>RED : {this.state.totalSlides-this.state.totalYellow}</Text>
      <Text style={Styles.text2}>YELLOW : {this.state.totalYellow}{"\n"}{"\n"}</Text>
      <Button
        onPress={this.restartGame}
        title="Restart Game"
        color="#841584"
      />

    </View>
  )
 }

 render(){
   switch (this.state.screeny) {
 			case 0:
 				return (this.render0())
      case 1:
        return (this.render1())
      case 2:
        return (this.render2())
      case 3:
          return (this.render3())
      case 4:
          return (this.render4())
 			default:
 				return (this.render0())
    }
  }
}
const Styles = {
 mainViewStyle: {
   flex:1,
},
text: {
  textAlign:"center", fontWeight: 'bold', color: 'black', fontSize:70, marginTop:20, marginBottom:20,
},
text2: {
  textAlign:"center", fontWeight: 'bold', color: 'black', fontSize:30, marginTop:5, marginBottom:20,
},
text3: {
  textAlign:"center", fontWeight: 'bold', color: 'black', fontSize:50, marginTop:5, marginBottom:20,
}
}
export default Body;
