import React from "react";
import { Content, Wrapper, ButtonLocal, Avatar, Image } from "./styles";
import { ReactTable, TableBody, TableRow, TableData } from "../../components/Table/styles";

const CreateStore = ({ setOpenModal, data, stores }) => {
    let storeName = "";
    stores.forEach((store) => {
        if (store.id === data.storeId) {
            storeName = store.name;
        }
    });

    return (
        <Wrapper>
            <Content>
                <h1>Thông tin chi tiết</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <Avatar>
                    <Image src={data.avatarUrl} />
                    <p>Ảnh đại diện</p>
                </Avatar>
                <ReactTable>
                    <TableBody>
                        <TableRow>
                            <TableData>Họ và tên</TableData>
                            <TableData>
                                <strong>{data.name}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Địa chỉ email</TableData>
                            <TableData>
                                <strong>{data.email}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Số điện thoại</TableData>
                            <TableData>
                                <strong>{data.phone}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Ngày sinh</TableData>
                            <TableData>
                                <strong>{data.dateOfBirth}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Cửa hàng</TableData>
                            <TableData>
                                <strong>{storeName}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Vị trí</TableData>
                            <TableData>
                                <strong>{data.roleName}</strong>
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
            </Content>
        </Wrapper>
    );
};

export default CreateStore;
