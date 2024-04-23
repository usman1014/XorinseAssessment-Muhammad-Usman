import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  heading: {
    fontSize: hp(4),
    color: '#000000',
    textAlign:'center',
    //paddingTop:hp(3)
  },
  subHeading: {
    fontSize: hp(2),
    marginBottom: hp(4),
    color:'#00000060',
    textAlign:'center'
  },
  inputWrapper: {
    alignSelf: 'center',
    width: '95%',
    marginVertical: hp(1)
  },
  inputView: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffa500',
    borderRadius: 10,
  },
  input: {
    width: '100%',

  },
  inputIcon: {
    width: 24,
    height: 24,
    margin: 10,
    tintColor: '#00000050',
  },
  forgotButton: {
    color: '#ffa500',
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',

  },
  SignupBtn: {
    padding: 12,
    alignSelf: 'center',
    width: '95%',
    backgroundColor: '#ffa500',
    borderRadius: 10,
    marginTop: hp(1.5),
  },
  SignupText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  text: {
    fontWeight: 'bold',
    color: '#ffa500',
    paddingHorizontal: 10,
    fontSize: 16,


  },


})