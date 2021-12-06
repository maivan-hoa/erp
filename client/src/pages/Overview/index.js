import React from "react";
import Table from "../../components/Table";

const Overview = () => {
    const datas = [
        {
            id: 1,
            name: "Mac Van Thiem",
            age: 22,
            phone: "0987654321",
            email: "macvanthiem@example.com",
        },
        {
            id: 2,
            name: "Mac Van Thanh",
            age: 64,
            phone: "0975318642",
            email: "macvanthanh@example.com",
        },
        {
            id: 3,
            name: "Luong Thi Vien",
            age: 50,
            phone: "0986427531",
            email: "macvanthiem@example.com",
        },
        {
            id: 4,
            name: "Mac Thi Thanh Huyen",
            age: 29,
            phone: "0987654321",
            email: "macthithanhhuyen@example.com",
        },
        {
            id: 5,
            name: "Nguyen Trong Tuan",
            age: 28,
            phone: "0987654321",
            email: "nguyentrongtuan@example.com",
        },
        {
            id: 6,
            name: "Mac Van Thiem",
            age: 22,
            phone: "0987654321",
            email: "macvanthiem@example.com",
        },
        {
            id: 7,
            name: "Mac Van Thanh",
            age: 64,
            phone: "0975318642",
            email: "macvanthanh@example.com",
        },
        {
            id: 8,
            name: "Luong Thi Vien",
            age: 50,
            phone: "0986427531",
            email: "macvanthiem@example.com",
        },
        {
            id: 9,
            name: "Mac Thi Thanh Huyen",
            age: 29,
            phone: "0987654321",
            email: "macthithanhhuyen@example.com",
        },
        {
            id: 10,
            name: "Nguyen Trong Tuan",
            age: 28,
            phone: "0987654321",
            email: "nguyentrongtuan@example.com",
        },
        {
            id: 11,
            name: "Mac Van Thiem",
            age: 22,
            phone: "0987654321",
            email: "macvanthiem@example.com",
        },
        {
            id: 12,
            name: "Mac Van Thanh",
            age: 64,
            phone: "0975318642",
            email: "macvanthanh@example.com",
        },
        {
            id: 13,
            name: "Luong Thi Vien",
            age: 50,
            phone: "0986427531",
            email: "macvanthiem@example.com",
        },
        {
            id: 14,
            name: "Mac Thi Thanh Huyen",
            age: 29,
            phone: "0987654321",
            email: "macthithanhhuyen@example.com",
        },
        {
            id: 15,
            name: "Nguyen Trong Tuan",
            age: 28,
            phone: "0987654321",
            email: "nguyentrongtuan@example.com",
        },
    ];

    const labels = [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Age",
            accessor: "age",
        },
        {
            Header: "Phone Number",
            accessor: "phone",
        },
        {
            Header: "Email",
            accessor: "email",
        },
    ];

    // console.log(labels);
    return (
        <div>
            <h1>Overview</h1>

            <Table labels={labels} datas={datas} />
        </div>
    );
};

export default Overview;
