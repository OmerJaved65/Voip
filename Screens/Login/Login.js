// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image, ImageBackground, Button, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';
import ButtonComponent from '../../Components/Button/Button';
import TextFields from '../../Components/TextBox/TextFields';
// import Icon


const Login = (props) => {
    return (
        <View style={styles.MainView}>
            <View>
                <View style={styles.SubView}>
                    <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                        />
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        LOGIN
                    </Text>
                </View>
                <View>
                    <TextFields style={styles.TextBox} placeholder='Username' />
                </View>
                <View>
                    <TextFields placeholder='Password' style={styles.TextBox} />
                </View>
                <ButtonComponent title="Login" />
                <View style={styles.BottomView}>
                    {/* <View> */}
                    <Text>
                        Don’t have an account yet?
                    </Text>
                    {/* </View>
                    <View> */}
                    <TouchableOpacity  onPress={()=>navigation.navigate('Register')}><Text style={{ color: '#3a76f0' }}> Sign Up </Text></TouchableOpacity>
                    {/* </View> */}
                    {/* <Icon
                        name='rocket'
                        color='grey'
                        size={20}
                    /> */}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    TextBox: {
        backgroundColor: '#f6f6f6',
        marginTop: '8%',
        marginBottom: '5%'
    },
    MainView: {
        padding: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'

    },
    SubView: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    BottomView: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '7%'
    }

});
export default Login;