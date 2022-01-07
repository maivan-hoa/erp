import React, { useEffect, useState } from "react";
import apis from "../../apis";
import BarChart from "../../components/BarChart";
import { Wrapper, GridTwo, Title1, OptionField } from "./styles";
import Spinner from "../../components/Spinner";
import Select from "../../components/Select";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Predict = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [weeklySaleInYearData, setWeeklySaleInYearData] = useState({});
    const [weeklySaleInYearLoading, setWeeklySaleInYearLoading] = useState(false);
    const [weeklySaleInYearError, setWeeklySaleInYearError] = useState(false);

    const [weeklySaleInStoreData, setWeeklySaleInStoreData] = useState([]);
    const [weeklySaleInStoreLoading, setWeeklySaleInStoreLoading] = useState(false);
    const [weeklySaleInStoreError, setWeeklySaleInStoreError] = useState(false);
    const [week1, setWeek1] = useState("1");

    const [weeklySaleInDeptData, setWeeklySaleInDeptData] = useState([]);
    const [weeklySaleInDeptLoading, setWeeklySaleInDeptLoading] = useState(false);
    const [weeklySaleInDeptError, setWeeklySaleInDeptError] = useState(false);
    const [week2, setWeek2] = useState("1");
    const [store, setStore] = useState("1");

    let weeks = [];
    let weekLabel = [];
    for (let i = 1; i < 53; i++) {
        weeks.push({ value: `${i}`, label: `Tuần ${i}` });
        weekLabel.push(i);
    }

    let stores = [];
    for (let i = 1; i < 46; i++) {
        stores.push({ value: i + "", label: "Cửa hàng " + i });
    }

    const getWeeklySaleInYearData = async () => {
        try {
            setWeeklySaleInYearLoading(true);
            const data = await apis.analysis.weeklySaleInYear();
            if (data.resultCode === 1) {
                let prev = [];
                let curr = [];
                let predict = [];
                data.predict.forEach((item) => {
                    if (item.year === 2013) {
                        predict.push(Math.round(item.weeklySales));
                    }
                });
                data.truth.forEach((item) => {
                    if (item.year === 2011) {
                        prev.push(Math.round(item.weeklySales));
                    }

                    if (item.year === 2012) {
                        curr.push(Math.round(item.weeklySales));
                    }
                });

                setWeeklySaleInYearData({ prev: prev, curr: curr, predict: predict });
            }
        } catch (error) {
            setWeeklySaleInYearError(true);
        }
        setWeeklySaleInYearLoading(false);
    };

    const getweeklySaleInStoreData = async (payload) => {
        try {
            setWeeklySaleInStoreLoading(true);
            const data = await apis.analysis.predictWeeklySaleInStore(payload);
            if (data.resultCode === 1) {
                setWeeklySaleInStoreData(data.data);
            }
        } catch (error) {
            setWeeklySaleInStoreError(true);
        }
        setWeeklySaleInStoreLoading(false);
    };

    const getweeklySaleInDeptData = async (payload) => {
        try {
            setWeeklySaleInDeptLoading(true);
            const data = await apis.analysis.predictWeeklySaleInDept(payload);
            if (data.resultCode === 1) {
                setWeeklySaleInDeptData(data.data);
            }
        } catch (error) {
            setWeeklySaleInDeptError(true);
        }
        setWeeklySaleInDeptLoading(false);
    };

    const runPredict = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://127.0.0.1:8005/run/predict");
            if (res.data.resultCode === 1) {
                setSuccess(true);
            }
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        runPredict();
    }, []);

    useEffect(() => {
        if (success) {
            getWeeklySaleInYearData();
        }
    }, [success]);

    useEffect(() => {
        if (success) {
            getweeklySaleInStoreData({ week: week1 });
        }
    }, [success, week1]);

    useEffect(() => {
        if (success) {
            getweeklySaleInDeptData({ week: week2, store: store });
        }
    }, [success, week2, store]);

    const handleChangeWeek1 = (e) => {
        setWeek1(e.target.value);
    };

    const handleChangeWeek2 = (e) => {
        setWeek2(e.target.value);
    };

    const handleChangeStore = (e) => {
        setStore(e.target.value);
    };

    // console.log(weeklySaleInYearData);

    return (
        <Wrapper>
            <h1>Dự đoán thông minh</h1>
            {loading ? (
                <>
                    <Spinner />
                    <p className='predict'>Hệ thống đang xử lý, hãy đợi . . .</p>
                </>
            ) : error ? (
                <p>Đã xảy ra lỗi trong quá trình dự đoán!</p>
            ) : (
                <>
                    <div className='predict-chart'>
                        {weeklySaleInYearLoading ? (
                            <Spinner />
                        ) : weeklySaleInYearError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <Line
                                options={{
                                    responsive: true,
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Doanh số theo dòng thời gian và dự đoán",
                                        },
                                    },
                                }}
                                data={{
                                    labels: weekLabel,
                                    datasets: [
                                        {
                                            label: "2011",
                                            data: weeklySaleInYearData.prev,
                                            borderColor: "rgb(255, 205, 86)",
                                            backgroundColor: "rgba(255, 205, 86, 0.2)",
                                        },
                                        {
                                            label: "2012",
                                            data: weeklySaleInYearData.curr,
                                            borderColor: "rgb(54, 162, 235)",
                                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                                        },
                                        {
                                            label: "2013",
                                            data: weeklySaleInYearData.predict,
                                            borderColor: "rgb(75, 192, 192)",
                                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                                        },
                                    ],
                                }}
                            />
                        )}
                    </div>

                    <div className='predict-chart'>
                        {weeklySaleInStoreLoading ? (
                            <Spinner />
                        ) : weeklySaleInStoreError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <GridTwo>
                                <div>
                                    <BarChart
                                        title={"Doanh số bán dự đoán của các cửa hàng trong tuần " + week1}
                                        labels={weeklySaleInStoreData.map((data) => data.store)}
                                        datas={{
                                            label: "Doanh số bán hàng dự đoán",
                                            data: weeklySaleInStoreData.map((data) => data.weeklySales),
                                            backgroundColor: "rgba(53, 162, 235, 0.5)",
                                        }}
                                    />
                                </div>
                                <div>
                                    <OptionField>
                                        <Title1>Chọn tuần</Title1>
                                        <Select datas={weeks} current={week1} handleChange={handleChangeWeek1} />
                                    </OptionField>
                                </div>
                            </GridTwo>
                        )}
                    </div>
                    <div className='predict-chart'>
                        {weeklySaleInDeptLoading ? (
                            <Spinner />
                        ) : weeklySaleInDeptError ? (
                            <p>Lỗi tải dữ liệu xuống!</p>
                        ) : (
                            <GridTwo>
                                <div>
                                    <BarChart
                                        title={"Doanh số bán dự đoán của các loại mặt hàng của cửa hàng " + store + " trong tuần " + week2}
                                        labels={weeklySaleInDeptData.map((data) => data.dept)}
                                        datas={{
                                            label: "Doanh số bán hàng dự đoán",
                                            data: weeklySaleInDeptData.map((data) => data.weeklySales),
                                            backgroundColor: "rgba(53, 162, 235, 0.5)",
                                        }}
                                    />
                                </div>
                                <div>
                                    <OptionField>
                                        <Title1>Chọn tuần</Title1>
                                        <Select datas={weeks} current={week2} handleChange={handleChangeWeek2} />
                                    </OptionField>
                                    <OptionField>
                                        <Title1>Chọn cửa hàng</Title1>
                                        <Select datas={stores} current={store} handleChange={handleChangeStore} />
                                    </OptionField>
                                </div>
                            </GridTwo>
                        )}
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default Predict;