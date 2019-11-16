import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenValue: "",
      choosenIndex: "",
      switchValue : false,
      name:'',
      username:'',
      password:''
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const myObjStr = JSON.stringify(this.state);
    if(this.state.name!='' && this.state.username!='' && this.state.password!='') {
      // here place your signup logic
      alert("User successfully signed up!");
      // console.log("user successfully signed up!: ",this.state);
      this.setState({
          choosenValue: "",
          choosenIndex: "",
          switchValue : false,
          name:"",
          username:"",
          password:""
      });
    }else{
      alert("Please fill all the required field!");
    }
  };

  toggleSwitch = value =>{
    this.setState({ switchValue: value});
  }

  render() {
    var positionArr = [
      { id:1, position:'Junior Developer'},
      { id:2, position:'Senior Developer'},
      { id:3, position:'UI Designer'},
      { id:4, position:'Team Leader'},
      { id:5, position:'Technical Support'},

    ]
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={val => this.onChangeText("name", val)}
        />
        <Text style={styles.label}>Position</Text>
        <Picker
          style ={ styles.position}
          selectedValue={this.state.choosenValue}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ choosenValue: itemValue, choosenIndex: itemIndex })
          }
        >
          {
            positionArr.map((data,index)=>{
                return(
                  <Picker.Item key={index} label={data.position} value={data.id} />
                )
            })
          }
          
        </Picker>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderView}>
          <Switch
            style={styles.gender}
            onValueChange={this.toggleSwitch.bind(this)}
            value = {this.state.switchValue}
            trackColor = {{ false: '#999', true:'#335'}}  //to change swith backgrund color 
          />
          <Text style={{color:'white'}}>{this.state.switchValue?"Female":"Male"}</Text>
        </View>

        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={val => this.onChangeText("username", val)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TouchableOpacity style={styles.signUpBtn} onPress={this.signUp}>
          <Text style={styles.signUpTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223"
  },
  formContainer:{
    marginTop: 100,
    marginHorizontal:50,
    justifyContent: "center",
    alignContent:'center'
  },
  label:{
    color:'#fff'
  },  
  input: {
    width: "100%",
    height: 55,
    marginBottom:10,
    padding: 8,
    backgroundColor: "#999",
    color: "white",
    borderRadius: 5,
    fontSize: 18,
    fontWeight: "500"
  },
  position:{
    color:'#fff',
    backgroundColor: "#999",
    marginBottom:10,
    borderRadius: 5,
  }, 
  genderView:{
    flexDirection:"row",
    marginBottom:10
  },
  signUpBtn: {
    width: "100%",
    backgroundColor: "#3cd",
    borderRadius: 5
  },
  signUpTxt: {
    textAlign: "center",
    padding: 10
  }
});
