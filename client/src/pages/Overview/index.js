import React, { useEffect, useState } from "react";
import apis from "../../apis";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import { GridTwo } from "./styles";
import Spinner from "../../components/Spinner";
import { useSelector } from "react-redux";

const Overview = () => {
    const role = useSelector((state) => state.auth.user.role.slug);

    const [truthDepartmentData, setTruthDepartmentData] = useState([]);
    const [truthDepartmentLoading, setTruthDepartmentLoading] = useState(false);
    const [truthDepartmentError, setTruthDepartmentError] = useState(false);

    const [truthSizeData, setTruthSizeData] = useState([]);
    const [truthSizeLoading, setTruthSizeLoading] = useState(false);
    const [truthSizeError, setTruthSizeError] = useState(false);

    const [truthTypeData, setTruthTypeData] = useState([]);
    const [truthTypeLoading, setTruthTypeLoading] = useState(false);
    const [truthTypeError, setTruthTypeError] = useState(false);

    const getTruthDepartmentData = async () => {
        try {
            setTruthDepartmentLoading(true);
            const data = await apis.analysis.truthDepartment();
            if (data.resultCode === 1) {
                setTruthDepartmentData(data.departmentInEachStore);
            }
        } catch (error) {
            setTruthDepartmentError(true);
        }
        setTruthDepartmentLoading(false);
    };

    const getTruthSizeData = async () => {
        try {
            setTruthSizeLoading(true);
            const data = await apis.analysis.truthSize();
            if (data.resultCode === 1) {
                setTruthSizeData(data.sizeInEachStore);
            }
        } catch (error) {
            setTruthSizeError(true);
        }
        setTruthSizeLoading(false);
    };

    const getTruthTypeData = async () => {
        try {
            setTruthTypeLoading(true);
            const data = await apis.analysis.truthType();
            if (data.resultCode === 1) {
                setTruthTypeData(data.numberType);
            }
        } catch (error) {
            setTruthTypeError(true);
        }
        setTruthTypeLoading(false);
    };

    useEffect(() => {
        getTruthSizeData();
        getTruthDepartmentData();
        getTruthTypeData();
    }, []);

    return (
        <div>
            <h1>Tổng quan</h1>
            {role === "giam-doc" ? (
                <GridTwo>
                    <div>
                        {truthDepartmentLoading ? (
                            <Spinner />
                        ) : truthDepartmentError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <BarChart
                                title='Số lượng mặt hàng trong mỗi cửa hàng'
                                labels={truthDepartmentData.map((data) => data.store)}
                                datas={{
                                    label: "số lượng mặt hàng",
                                    data: truthDepartmentData.map((data) => data.dept),
                                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                                }}
                            />
                        )}
                    </div>
                    <div>
                        {truthTypeLoading ? (
                            <Spinner />
                        ) : truthTypeError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <PieChart
                                title='Số lượng các kiểu cửa hàng'
                                data={{
                                    labels: truthTypeData.map((data) => data.type),
                                    datasets: [
                                        {
                                            label: "",
                                            data: truthTypeData.map((data) => data.store),
                                            backgroundColor: [
                                                "rgba(255, 99, 132, 0.2)",
                                                "rgba(54, 162, 235, 0.2)",
                                                "rgba(255, 206, 86, 0.2)",
                                                "rgba(75, 192, 192, 0.2)",
                                                "rgba(153, 102, 255, 0.2)",
                                                "rgba(255, 159, 64, 0.2)",
                                            ],
                                            borderColor: [
                                                "rgba(255, 99, 132, 1)",
                                                "rgba(54, 162, 235, 1)",
                                                "rgba(255, 206, 86, 1)",
                                                "rgba(75, 192, 192, 1)",
                                                "rgba(153, 102, 255, 1)",
                                                "rgba(255, 159, 64, 1)",
                                            ],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        )}
                    </div>
                    <div>
                        {truthSizeLoading ? (
                            <Spinner />
                        ) : truthSizeError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <BarChart
                                title='Kích thước của mỗi cửa hàng'
                                labels={truthSizeData.map((data) => data.store)}
                                datas={{
                                    label: "kích thước",
                                    data: truthSizeData.map((data) => data.size),
                                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                                }}
                            />
                        )}
                    </div>
                    <div></div>
                    <div></div>
                </GridTwo>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Overview;
