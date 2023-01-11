import { StatusBar } from "expo-status-bar";
import Identity from "./screens/Identity";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      {/* <Button icon={<Icon name="rocket" size={25} color="white" />} /> */}
      <View style={styles.wrap}>
        {/* <View style={styles.btncont}>
          <Ionicons name="md-checkmark-circle" size={32} color="#004852" />
        </View>
        <View style={styles.btncont}>
          <Ionicons name="md-checkmark-circle" size={32} color="#004852" />
        </View> */}
        <TouchableOpacity style={styles.btncont}>
          <Ionicons name="md-checkmark-circle" size={32} color="#004852" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncont}>
          <Ionicons name="md-checkmark-circle" size={32} color="#004852" />
        </TouchableOpacity>
      </View>
      <Text
        style={{ color: "#CBCBCB", paddingTop: "2rem", paddingTop: "2rem" }}
      >
        OR
      </Text>
      <SafeAreaView style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="FULL NAME" />
        <TextInput style={styles.input} placeholder="EMAIL" />
        <TextInput style={styles.input} placeholder="PASSWORD" />
        {/* <Button title="SIGN UP" style={styles.btn} color="#DFFD54" /> */}
      </SafeAreaView>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.botdiv}>
        <Text style={styles.bottxt}>Already Have An Account?</Text>
        <Text style={styles.log}> Log In</Text>
      </View>
      {/* <Button title="Solid Button" />

      <Button title="Outline button" type="outline" />

      <Button title="Clear button" type="clear" /> */}
      {/* <Icon name="rocket" size={25} color="white" /> */}
      {/* <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
        Sign in with Facebook
      </FontAwesome.Button> */}
      <StatusBar style="auto" />
      <Identity />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    paddingTop: "5rem",
    paddingBottom: "2rem",
  },
  btncont: {
    backgroundColor: "#f5f5f5",
    paddingTop: ".8rem",
    paddingBottom: ".8rem",
    paddingLeft: "3.3rem",
    paddingRight: "3.3rem",
    borderRadius: "10px",
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    color: "#cbcbcb",
    height: 50,
    width: 320,
    // margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
  inputArea: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  btn: {
    backgroundColor: "#DFFD54",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    borderRadius: "10px",
    marginTop: "1rem",
    marginBottom: ".5rem",
  },
  btntxt: {
    fontSize: 17,
    fontWeight: 700,
  },
  bottxt: {
    fontSize: 15,
    paddingTop: "1rem",
  },
  log: {
    fontSize: 15,
    paddingTop: "1rem",
    fontWeight: 700,
  },
  botdiv: {
    display: "flex",
    flexDirection: "row",
  },
});
