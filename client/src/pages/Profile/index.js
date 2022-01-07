import React from 'react';
import {Wrapper} from "./styles";
import { ReactTable, TableBody, TableRow, TableData } from "../../components/Table/styles";
import { useSelector } from "react-redux";
import { Avatar, Image } from '../Modal/styles';

const Profile = () => {
    let user = useSelector((state) =>  state.auth.user);
    const stores = useSelector((state) =>  state.store.stores);
    stores.forEach(store => {
        if (store.id === user.storeId) {
            user = {...user, storeName: store.name };
        }
    })
    let d = new Date(user.createdAt);
    let date = `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}`;
    user = {...user, createdAt: date};
    return (
        <Wrapper>
            <h2>Thông tin cá nhân</h2>
            <Avatar>
                <Image src={user.avatarUrl} />
                <p>Ảnh đại diện</p>
            </Avatar>
            <ReactTable>
                <TableBody>
                    <TableRow>
                        <TableData>Họ và tên</TableData>
                        <TableData>
                            <strong>{user.name}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Địa chỉ email</TableData>
                        <TableData>
                            <strong>{user.email}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Số điện thoại</TableData>
                        <TableData>
                            <strong>{user.phone}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Ngày sinh</TableData>
                        <TableData>
                            <strong>{user.dateOfBirth}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Cửa hàng</TableData>
                        <TableData>
                            <strong>{user.storeName}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Vị trí</TableData>
                        <TableData>
                            <strong>{user.role.name}</strong>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Ngày tạo</TableData>
                        <TableData>
                            <strong>{user.createdAt}</strong>
                        </TableData>
                    </TableRow>
                </TableBody>
            </ReactTable>
        </Wrapper>
    )
}

export default Profile;