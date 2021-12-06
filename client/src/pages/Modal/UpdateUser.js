import React from "react";
import { Formik, Form, FastField } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { Content, Wrapper, ButtonLocal, Grid } from "./styles";
import SelectField from "../../components/SelectField";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../../redux/userSlice";

const UpdateStore = ({ setOpenModal, stores, roles, currentUser }) => {
    const dispatch = useDispatch();

    const options = stores.map((store) => ({ value: store.id, label: store.name }));
    const options2 = roles.map((role) => ({ value: role.id, label: role.name }));

    const initialValues = {
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone,
        date_of_birth: currentUser.dateOfBirth,
        store_id: currentUser.storeId,
        avatar: "",
        role: currentUser.role.id,
    };

    const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required!"),
        email: Yup.string().email("Invalid email address!").required("Email is required!"),
        phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required!"),
        date_of_birth: Yup.date().required("Date of birth is required!"),
        store_id: Yup.string().required("Store is required!"),
        role: Yup.string().required("Role is required!"),
    });

    const handleSubmit = (values) => {
        const payload = { ...values, id: currentUser.id };
        dispatch(updateUserAsync(payload));
        setOpenModal(false);
    };
    return (
        <Wrapper>
            <Content>
                <h1>Cập nhật thông tin</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
                    {(props) => {
                        return (
                            <Form>
                                <FastField
                                    // Formik's props
                                    name='name'
                                    component={Input}
                                    // Additional props
                                    label='Họ và tên'
                                    type='text'
                                    placeholder=''
                                    disable={false}
                                />

                                <FastField
                                    // Formik's props
                                    name='email'
                                    component={Input}
                                    // Additional props
                                    label='Địa chỉ Email'
                                    type='email'
                                    placeholder=''
                                    disable={false}
                                />

                                <FastField
                                    // Formik's props
                                    name='phone'
                                    component={Input}
                                    // Additional props
                                    label='Số điện thoại'
                                    type='text'
                                    placeholder=''
                                    disable={false}
                                />

                                <Grid>
                                    <FastField
                                        // Formik's props
                                        name='date_of_birth'
                                        component={Input}
                                        // Additional props
                                        label='Ngày sinh'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />
                                    <FastField
                                        // Formik's props
                                        name='avatar'
                                        component={Input}
                                        // Additional props
                                        label='Ảnh đại diện'
                                        type='file'
                                        placeholder=''
                                        disable={false}
                                    />
                                </Grid>

                                <FastField name='store_id' component={SelectField} label='Thuộc cửa hàng' placeholder='' options={options} />

                                <FastField name='role' component={SelectField} label='Vị trí' placeholder='' options={options2} />

                                <Button type='submit' block>
                                    Cập nhật
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Content>
        </Wrapper>
    );
};

export default UpdateStore;
