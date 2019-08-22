import React, {Component} from 'react';
import { Text , View, Button} from 'react-native';
class Info extends Component{
  state={

  }
  UNSAFE_componentWillMount(){
  }
  render(){
    return(
      <View style={Styles.mainViewStyle}>
					<Text style= {{marginTop:20,marginBottom:20,textAlign:"center", fontWeight: 'bold', color: 'black', fontSize: 20 }}>
           Welcome to Spectrum!{"\n"}
           Count number of {"\n"}
           <Text style= {{color:"red",}}>RED</Text> and <Text style= {{color:"yellow",}}>YELLOW</Text>{"\n"}
           FLASHES!!!!
           </Text>
			</View>
      );
    }
  }
  const Styles = {
	 mainViewStyle: {
     flex:1,
     displayFlex:"center",
     alignItems:"center",
     paddingTop:"40%",
     backgroundColor:"#4ebbbf"
	}
}
export default Info
