import React from "react";
import { Content, Wrapper, ButtonLocal } from "./styles";
import { ReactTable, TableBody, TableRow, TableData, TableHead, TableHeader } from "../../components/Table/styles";

const DetailProduct = ({ setOpenModal, data }) => {
    return (
        <Wrapper>
            <Content>
                <h1>Thông tin chi tiết</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <ReactTable>
                    <TableBody>
                        <TableRow>
                            <TableData>Tên khách hàng</TableData>
                            <TableData>
                                <strong>{data.customerName}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Số điện thoại</TableData>
                            <TableData>
                                <strong>{data.customerPhone}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Số mặt hàng</TableData>
                            <TableData>
                                <strong>{data.productCount}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Tổng số tiền (VNĐ)</TableData>
                            <TableData>
                                <strong>{data.totalMoney}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Người tạo</TableData>
                            <TableData>
                                <strong>{data.createdBy}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Ngày tạo</TableData>
                            <TableData>
                                <strong>{data.createdAt}</strong>
                            </TableData>
                        </TableRow>
                    </TableBody>
                </ReactTable>
                <h2>Danh sách sản phẩm mua</h2>
                <ReactTable>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Tên sản phẩm</TableHeader>
                            <TableHeader>SKU</TableHeader>
                            <TableHeader>Số lượng</TableHeader>
                            <TableHeader>Giá</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.listProduct.map((product) => (
                            <TableRow key={product.sku + "_" + product.price}>
                                <TableData>{product.name}</TableData>
                                <TableData>{product.sku}</TableData>
                                <TableData>{product.count}</TableData>
                                <TableData>{product.price}</TableData>
                            </TableRow>
                        ))}
                    </TableBody>
                </ReactTable>
            </Content>
        </Wrapper>
    );
};

export default DetailProduct;
