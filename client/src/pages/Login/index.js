import React from "react";
import { Formik, Form, FastField } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { Wrapper, FormField } from "./styles";

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address!").required("Email is required!"),
        password: Yup.string().min(8, "Password must be at least 8 characters!").required("Password is required!"),
    });

    return (
        <Wrapper>
            <FormField>
                <h1>Login</h1>
                {/* <p>It's free and only takes a minute</p> */}
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => console.log(values)}>
                    {(props) => {
                        return (
                            <Form>
                                <FastField
                                    // Formik's props
                                    name='email'
                                    component={Input}
                                    // Additional props
                                    label='Email'
                                    type='email'
                                    placeholder=''
                                    disable={false}
                                />

                                <FastField
                                    // Formik's props
                                    name='password'
                                    component={Input}
                                    // Additional props
                                    label='Password'
                                    type='password'
                                    placeholder=''
                                    disable={false}
                                />

                                <Button block>Login</Button>
                                {/* <p className='bottom-text'>
                                    By clicking the Sign Up button, you agree to our
                                    <a href='/#'>Terms & Conditions</a> and
                                    <a href='/#'>Privacy Policy</a>
                                </p> */}
                            </Form>
                        );
                    }}
                </Formik>
            </FormField>
            {/* <footer>
                <p>
                    Already have an account? <a href='/#'>Login here</a>
                </p>
            </footer> */}
        </Wrapper>
    );
};

export default Login;
