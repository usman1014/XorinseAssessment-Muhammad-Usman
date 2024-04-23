import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';

export default function ForgotPassword({navigation}) {
    return (
        <View style={{ flex: 1, paddingHorizontal: wp(4) }}>
            <View style={{ flexDirection: 'row', paddingTop: hp(7), width: '100%', justifyContent: 'space-between', }}>
                <Image source={require('../../assets/back.png')} style={{ height: 25, width: 25, }} />
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>

                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#00000050', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#00000050', }]} />
                    </View>
                </View>
            </View>
            <Text style={styles.heading}>Forget Password</Text>
            <Text style={styles.subHeading}>Please Enter your mobile number to get otp</Text>

            <View style={styles.inputWrapper}>
                <Text style={{ color: 'gray', marginVertical: hp(1) }}>Mobile Number</Text>
                <View style={styles.inputView}>
                    <Image source={require('../../assets/phone.png')}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder='0300xxxxxxx'
                    />
                </View>
            </View>
            <Text style={{ color: 'gray', marginVertical: hp(2), paddingHorizontal: wp(4) }}>Select Platform</Text>

            <View style={{ flexDirection: 'row',paddingHorizontal:wp(6) }}>
                <View style={styles.optionWrapper}>

                    <View style={{ height: 15, width: 15, backgroundColor: '#00000050', borderRadius: 10 }} />

                    <Text style={{ color: '#00000050' }}>-  Whatsapp</Text>
                </View>
                <View style={styles.optionWrapper}>

                    <View style={{ height: 15, width: 15, backgroundColor: '#ffa500', borderRadius: 10, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/check.png')} style={{ height: 10, width: 10, tintColor: '#fff' }} />
                    </View>
                    <Text style={{ color: '#ffa500' }}>-  sms</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.ContinueBtn}
            onPress={()=> navigation.navigate('Verification')}>
                <Text style={styles.ContinueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}