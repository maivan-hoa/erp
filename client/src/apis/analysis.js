import api from "./api";

const truthDepartment = async () => {
    const datas = await api({
        method: "GET",
        url: "/sv_5/analysis/truth/department",
    });

    return datas;
};

const truthSize = async () => {
    const datas = await api({
        method: "GET",
        url: "/sv_5/analysis/truth/size",
    });

    return datas;
};

const truthType = async () => {
    const datas = await api({
        method: "GET",
        url: "/sv_5/analysis/truth/type",
    });

    return datas;
};

export { truthDepartment, truthSize, truthType };
