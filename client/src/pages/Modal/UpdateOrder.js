import React from "react";
import Button from "../../components/Button";
import { Content, Wrapper, ButtonLocal } from "./styles";

const UpdateStore = ({ setOpenModal }) => {
    return (
        <Wrapper>
            <Content>
                <h1>Cập nhật hóa đơn</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>

                <h3>
                    <i>Tính năng này không được hỗ trợ!</i>
                </h3>

                <Button onClick={() => setOpenModal(false)} block>
                    Tôi đã hiểu
                </Button>
            </Content>
        </Wrapper>
    );
};

export default UpdateStore;
