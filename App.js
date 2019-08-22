import React from 'react';
import Body from "./components/Body"

const App = () => {
  return (
      <Body style={Styles.mainViewStyle}/>
    );
};
const Styles = {
 mainViewStyle: {
   flex:1
}
}
export default App;
