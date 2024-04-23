import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Signin({navigation}) {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff', }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
                <Image source={require('../../assets/icon.png')}
                    style={{ width: '40%', height: hp(18), alignSelf: 'center', marginVertical: hp(8) }} />

                <Text style={styles.heading}>Welcome!</Text>
                <Text style={styles.subHeading}>Sign in to continue.</Text>

                <KeyboardAvoidingView>

                    <View style={styles.inputWrapper}>
                        <Text style={{ color: 'gray',marginVertical:hp(1) }}>Mobile Number</Text>
                        <View style={styles.inputView}>
                            <Image source={require('../../assets/phone.png')}
                                style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder='0300xxxxxxx'
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
                                placeholder='Enter Password'
                            />
                        </View>
                    </View>

                </KeyboardAvoidingView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(2), paddingHorizontal: wp(4) }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../../assets/checkbox.png')} style={{ height: hp(3), width: wp(5), marginHorizontal: wp(3), tintColor: 'gray' }} />
                        <Text style={{ color: 'gray' }}>Remember me</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('ForgetPassword')}>

                    <Text style={styles.forgotButton}>Forgot password?</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.SigninBtn}>
                    <Text style={styles.SigninText}>Sign In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: hp(4) }}>
                    <Text style={{ fontSize: 16, }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>

    )
}