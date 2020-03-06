import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from '../styles/signup_in_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MaterialIndicator} from 'react-native-indicators';

export const SignupFrom = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="gray"
          textContentType="name"
          keyboardType="name-phone-pad"
          onChangeText={name => props.nameCallback(name)}
          returnKeyType="next"
          onSubmitEditing={() => this.emailField.focus()}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={email => props.emailCallback(email)}
          ref={input => (this.emailField = input)}
          onSubmitEditing={() => this.passwordField.focus()}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          textContentType="password"
          keyboardType="name-phone-pad"
          secureTextEntry
          onChangeText={password => props.passwordCallback(password)}
          ref={input => (this.passwordField = input)}
          returnKeyType="go"
          onSubmitEditing={() => props.onSignup()}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 150,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '600',
              alignSelf: 'center',
            }}>
            Sign Up
          </Text>

          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#3700b3',
              alignSelf: 'center',
              justifyContent: 'center',
              shadowRadius: 5,
              shadowColor: '#95969c',
              shadowOpacity: 1,
              shadowOffset: {width: 2, height: 2},
            }}>
            <TouchableOpacity
              onPress={() => props.onSignup()}
              disabled={props.loading}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {props.loading ? (
                  <MaterialIndicator
                    size={20}
                    color="#fff"
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#fff"
                    style={{alignSelf: 'center'}}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignContent: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <TouchableOpacity onPress={() => props.onSigninCallback()}>
          <Text style={{textDecorationLine: 'underline', fontSize: 16}}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Text
            style={{
              textDecorationLine: 'underline',
              opacity: 0.6,
              fontSize: 16,
            }}>
            Forgot Password
          </Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SigninForm = props => {
  console.log('Login props' + JSON.stringify(props));
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCompleteType="email"
          onChangeText={email => props.emailCallback(email)}
          ref={input => (this.emailField = input)}
          onSubmitEditing={() => this.passwordField.focus()}
          returnKeyType="next"
          enablesReturnKeyAutomatically
        />
        {props.errors[0] ? (
          <Text style={{color: 'red'}}> {props.errors[0]} </Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          textContentType="password"
          keyboardType="name-phone-pad"
          autoCompleteType="password"
          secureTextEntry
          onChangeText={password => props.passwordCallback(password)}
          ref={input => (this.passwordField = input)}
          returnKeyType="go"
          enablesReturnKeyAutomatically
          onSubmitEditing={() => props.onSignin()}
        />
        {props.errors[1] ? <Text> {props.errors[1]} </Text> : null}
        <View
          style={{
            flexDirection: 'row',
            height: 150,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '600',
              alignSelf: 'center',
            }}>
            Sign In
          </Text>

          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#3700b3',
              alignSelf: 'center',
              justifyContent: 'center',
              shadowRadius: 5,
              shadowColor: '#95969c',
              shadowOpacity: 1,
              shadowOffset: {width: 2, height: 2},
            }}>
            <TouchableOpacity onPress={() => props.onSignin()}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {props.loading ? (
                  <MaterialIndicator
                    size={20}
                    color="#fff"
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#fff"
                    style={{alignSelf: 'center'}}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignContent: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <TouchableOpacity onPress={() => props.onSignupCallback()}>
          <Text style={{textDecorationLine: 'underline', fontSize: 16}}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: 'underline',
              opacity: 0.6,
              fontSize: 16,
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
