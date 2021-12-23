import React from "react";
import { Formik, Form, FastField } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { Content, Wrapper, ButtonLocal, Grid } from "./styles";
import SelectField from "../../components/SelectField";
import axios from "axios";
const CreateProduct = ({ setOpenModal, setReload, categories }) => {
    let options = [];

    categories.forEach((category) => {
        options.push({ value: category.id, label: category.name });
    });

    const initialValues = {
        name: "",
        sku: "",
        unit: "",
        description: "",
        origin: "",
        preserve: "",
        weight: "",
        photo: "",
        category: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required!"),
        sku: Yup.string().required("SKU is required!"),
        unit: Yup.string().required("Unit is required!"),
        description: Yup.string(),
        origin: Yup.string(),
        weight: Yup.string(),
        preserve: Yup.string(),
        category: Yup.string().required("Category is required!"),
    });

    const handleSubmit = (values) => {
        // const payload = { ...values };
        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("sku", values.sku);
        formData.append("unit", values.unit);
        formData.append("description", values.description);
        formData.append("origin", values.origin);
        formData.append("preserve", values.preserve);
        formData.append("weight", values.weight);
        formData.append("photo", values.photo);
        formData.append("category", values.category);
        axios.post("http://localhost:8003/products", formData);
        setReload(1);
        setOpenModal(false);
    };
    return (
        <Wrapper>
            <Content>
                <h1>Thêm sản phẩm mới</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
                    {(props) => {
                        return (
                            <Form>
                                <Grid>
                                    <FastField
                                        // Formik's props
                                        name='name'
                                        component={Input}
                                        // Additional props
                                        label='Tên sản phẩm'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />

                                    <FastField
                                        // Formik's props
                                        name='sku'
                                        component={Input}
                                        // Additional props
                                        label='SKU'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />
                                </Grid>
                                <Grid>
                                    <FastField
                                        // Formik's props
                                        name='unit'
                                        component={Input}
                                        // Additional props
                                        label='Đơn vị'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />
                                    <FastField
                                        // Formik's props
                                        name='origin'
                                        component={Input}
                                        // Additional props
                                        label='Xuất xứ'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />
                                </Grid>
                                <Grid>
                                    <FastField
                                        // Formik's props
                                        name='weight'
                                        component={Input}
                                        // Additional props
                                        label='Khối lượng'
                                        type='text'
                                        placeholder=''
                                        disable={false}
                                    />
                                    <div>
                                        <label className='label-photo'>Ảnh sản phẩm</label>
                                        <input
                                            className='upload-photo'
                                            type='file'
                                            name='photo'
                                            onChange={(e) => props.setFieldValue("photo", e.target.files[0])}
                                        />
                                    </div>
                                </Grid>
                                <FastField name='category' component={SelectField} label='Danh mục sản phẩm' placeholder='' options={options} />
                                <FastField
                                    // Formik's props
                                    name='preserve'
                                    component={Input}
                                    // Additional props
                                    label='Bảo quản'
                                    type='text'
                                    placeholder=''
                                    disable={false}
                                />
                                <FastField
                                    // Formik's props
                                    name='description'
                                    component={Input}
                                    // Additional props
                                    label='Mô tả'
                                    type='text'
                                    placeholder=''
                                    disable={false}
                                />
                                <Button type='submit' block>
                                    Thêm
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Content>
        </Wrapper>
    );
};

export default CreateProduct;
