import React from "react";
import { Grid, Content, Wrapper, ButtonLocal, Avatar, Photo, Info } from "./styles";
import { ReactTable, TableBody, TableRow, TableData } from "../../components/Table/styles";

const DetailProduct = ({ setOpenModal, data }) => {
    return (
        <Wrapper>
            <Content>
                <h1>Thông tin chi tiết</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <Grid>
                    <Avatar>
                        <Photo src={data.photoUrl} />
                        <p>Ảnh sản phẩm</p>
                    </Avatar>
                    <ReactTable>
                        <TableBody>
                            <TableRow>
                                <TableData>Tên sản phẩm</TableData>
                                <TableData>
                                    <strong>{data.name}</strong>
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>SKU</TableData>
                                <TableData>
                                    <strong>{data.sku}</strong>
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Danh mục</TableData>
                                <TableData>
                                    <strong>{data.categoryName}</strong>
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Đơn vị</TableData>
                                <TableData>
                                    <strong>{data.unit}</strong>
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Xuất xứ</TableData>
                                <TableData>
                                    <strong>{data.origin}</strong>
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Khối lượng</TableData>
                                <TableData>
                                    <strong>{data.weight}</strong>
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
                </Grid>
                <Info>
                    <strong>Bảo quản: </strong> {data.preserve}
                </Info>
                <Info>
                    <strong>Mô tả: </strong> {data.description}
                </Info>
            </Content>
        </Wrapper>
    );
};

export default DetailProduct;
