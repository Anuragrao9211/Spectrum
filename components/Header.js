import React, {Component} from 'react';
import { Text , View} from 'react-native';
class Header extends Component{
  state={
    headerTitle:"SPECTRUM"
  }
  UNSAFE_componentWillMount(){
  }
  render(){
    return(
      <View style={Styles.mainViewStyle}>
					<Text style= {{marginTop:20,marginBottom:20,fontWeight: 'bold', color: '#4ebbbf', fontSize: 40 }}> {this.state.headerTitle} </Text>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,width: '100%',opacity: 0.5,}} />
			</View>
      );
    }
  }
  const Styles = {
	 mainViewStyle: {
    alignItems:"center",
		backgroundColor: '#ebebeb'
	}
}
export default Header
