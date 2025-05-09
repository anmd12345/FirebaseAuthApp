import React from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
  password: Yup.string().min(6, 'Ít nhất 6 ký tự').required('Bắt buộc'),
});

const LoginScreen = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      Alert.alert('Lỗi', error.message);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => handleLogin(values.email, values.password)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput placeholder="Email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
          {touched.email && errors.email && <Text>{errors.email}</Text>}

          <TextInput placeholder="Mật khẩu" secureTextEntry onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
          {touched.password && errors.password && <Text>{errors.password}</Text>}

          <Button title="Đăng nhập" onPress={handleSubmit as any} />
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
