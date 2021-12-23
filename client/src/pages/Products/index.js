import React, { useEffect, useState } from "react";
import { Wrapper, Title } from "./styles";
import Button from "../../components/Button";
import apis from "../../apis";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import DetailProduct from "../Modal/DetailProduct";
import CreateProduct from "../Modal/CreateProduct";
import UpdateProduct from "../Modal/UpdateProduct";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [openDetailModal, setOpenDetailModal] = useState(false);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [currentObject, setCurrentObject] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(0);
    let datas = [];
    const hasDetail = true;

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const products = await apis.product.getProducts();
                if (products.status === 1) {
                    setProducts(products.result);
                }
                const categories = await apis.category.getCategories();
                if (categories.status === 1) {
                    setCategories(categories.result);
                }
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };

        setReload(0);
        getProducts();
    }, [reload]);

    products.forEach((product) => {
        let d = new Date(product.createdAt);
        let date = `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}`;
        datas.push({ ...product, createdAt: date, categoryName: product.category.name });
    });

    const labels = [
        {
            Header: "Tên sản phẩm",
            accessor: "name",
        },
        {
            Header: "SKU",
            accessor: "sku",
        },
        {
            Header: "Danh mục",
            accessor: "categoryName",
        },
        {
            Header: "Đơn vị",
            accessor: "unit",
        },
        {
            Header: "Xuất xứ",
            accessor: "origin",
        },
        {
            Header: "Ngày tạo",
            accessor: "createdAt",
        },
    ];

    const handleDelete = (product) => {
        if (window.confirm("Sản phẩm " + product.name + " sẽ bị xóa !") === true) {
            apis.product.deleteProduct(product.id).then((rea) => {
                setReload(1);
            });
        }
    };

    return (
        <Wrapper>
            {openDetailModal && <DetailProduct setOpenModal={setOpenDetailModal} data={currentObject} />}
            {openCreateModal && <CreateProduct setOpenModal={setOpenCreateModal} setReload={setReload} categories={categories} />}
            {openUpdateModal && <UpdateProduct setOpenModal={setOpenUpdateModal} currentObject={currentObject} setReload={setReload} categories={categories} />}
            <Title>
                <h1>Sản phẩm</h1>
                <Button onClick={() => setOpenCreateModal(true)}>Thêm sản phẩm mới</Button>
            </Title>
            {loading ? (
                <Spinner />
            ) : error ? (
                <p>Lỗi tải dữ liệu xuống!</p>
            ) : (
                <Table
                    labels={labels}
                    datas={datas}
                    hasDetail={hasDetail}
                    setOpenDetailModal={setOpenDetailModal}
                    setCurrentObject={setCurrentObject}
                    setOpenUpdateModal={setOpenUpdateModal}
                    deleteObject={handleDelete}
                />
            )}
        </Wrapper>
    );
};

export default Product;
