import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Signup({navigation}) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff', }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />

               <View style={{width: '100%',paddingHorizontal:20,flexDirection:'row',justifyContent: 'center',paddingTop:hp(10)}}>
                <Image style={{height: 25,width: 25,position: 'absolute',left: 10,top: hp(10),}} source={require('../../assets/back.png')}/>
                <Text style={styles.heading}>Create Account</Text>
               </View>
               <Text style={styles.subHeading}>It's free and easy to set up!</Text>


                <KeyboardAvoidingView>

                <View style={styles.inputWrapper}>
                        <Text style={{ color: 'gray',marginVertical:hp(1) }}>Username</Text>
                        <View style={styles.inputView}>
                            <Image source={require('../../assets/user.png')}
                                style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Mateen'
                                placeholderTextColor={'#00000050'}

                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ color: 'gray' ,marginVertical:hp(1)}}>Mobile Number</Text>
                        <View style={styles.inputView}>
                            <Image source={require('../../assets/phone.png')}
                                style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder='0300xxxxxxx'
                                placeholderTextColor={'#00000050'}

                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ color: 'gray' ,marginVertical:hp(1)}}>Password</Text>
                        <View style={styles.inputView}>
                            <Image source={require('../../assets/lock.png')}
                                style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder='********'
                                placeholderTextColor={'#00000050'}

                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ color: 'gray' ,marginVertical:hp(1)}}>Institute Name</Text>
                        <View style={styles.inputView}>
                            <Image source={require('../../assets/university.png')}
                                style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder='University of technology'
                                placeholderTextColor={'#00000050'}
                            />
                        </View>
                    </View>

                </KeyboardAvoidingView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1.6), paddingHorizontal: wp(4) }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../../assets/checkbox.png')} style={{ height: hp(3), width: wp(5), paddingHorizontal: wp(3), tintColor: 'gray' ,marginRight:5}} />
                        <Text style={{ color: 'gray' ,fontSize:hp(1.8)}}>I accept the terms and condition</Text>
                    </View>

                </View>
                <TouchableOpacity style={styles.SignupBtn}>
                    <Text style={styles.SignupText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: hp(4) }}>
                    <Text style={{ fontSize: 16, }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
  )
}