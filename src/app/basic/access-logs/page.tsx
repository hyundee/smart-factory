"use client";

import { useCallback, useEffect, useState } from "react";
// import { Calendar } from '@/components/calendar/Calendar'
import { Title } from "@/components/Inputs/Title";
import { SearchForm } from "@/components/form/SearchForm";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SortedHeader } from "@/components/table/SortedHeader";
import { AccessLogsData } from "@/types/basic";
import { SearchFormData } from "@/types/common";
// import { Pagination } from "@/components/pagination/Pagination";
import { LogsList } from "@/components/dataList/LogsList";

const options = [
    {
        name: "동작",
        sorted: false,
    },
    {
        name: "부서",
        sorted: false,
    },
    {
        name: "권한",
        sorted: false,
    },
    {
        name: "날짜",
        sorted: true,
    },
    {
        name: "시용자ID",
        sorted: false,
    },
];

const selectOptions = ["부서", "사용자"];

type fetchDataParams = {
    department_name?: string;
    auth_name?: string;
    page?: string;
};

const getQueryParams = (
    formData: SearchFormData,
    page: number
): fetchDataParams => {
    const { category, text } = formData;
    const queryParams: fetchDataParams = { page: `${page ? page - 1 : 0}` };
    if (category === "부서" && text) queryParams.department_name = text;
    if (category === "사용자" && text) queryParams.auth_name = text;
    return queryParams;
};

export default function AccessLogs() {
    const methods = useForm<SearchFormData>();
    const { register, getValues } = methods;

    const [dataList, setDataList] = useState<AccessLogsData[]>([]);
    const [isSorted, setIsSorted] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [paging, setPaging] = useState(20);

    const handleSorting = (key: string) => {
        if (dataList) {
            const newData: AccessLogsData[] = [...dataList];

            if (key === "날짜") {
                newData.sort((a, b) => {
                    return isSorted
                        ? new Date(b.createdAt).getTime() -
                              new Date(a.createdAt).getTime()
                        : new Date(a.createdAt).getTime() -
                              new Date(b.createdAt).getTime();
                });
            }
            setIsSorted((prev) => !prev);
            setDataList(newData);
        }
    };

    const searchFetchData = useCallback(async (params?: fetchDataParams) => {
        try {
            const res = await fetch(
                `/api/logs/system?${new URLSearchParams(
                    params as Record<string, string>
                )}`
            ).then((res) => res.json());
            setDataList(res.data as AccessLogsData[]);
            setTotalItemCount(res.totalCount);
            setPaging(res.paging.size);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    const onSubmit: SubmitHandler<SearchFormData> = useCallback(
        async (data) => {
            await searchFetchData(getQueryParams(data, currentPage));
        },
        [currentPage, searchFetchData]
    );

    useEffect(() => {
        const formData = getValues();
        searchFetchData(getQueryParams(formData, currentPage));
    }, [searchFetchData, currentPage, getValues]);

    return (
        <FormProvider {...methods}>
            <Title title="System Access Log" />
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="form-column"
            >
                <div className="flex w-full flex-row gap-2">
                    {/* <Calendar /> */}
                    <SearchForm
                        options={selectOptions}
                        register={register}
                        category={"category"}
                        text={"text"}
                    />
                </div>
                <div>
                    <SortedHeader
                        headers={options}
                        handleSorting={handleSorting}
                    />
                    <LogsList dataList={dataList} />
                </div>
            </form>
            {/* <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItemCount={totalItemCount}
                itemsPerPage={paging}
            /> */}
        </FormProvider>
    );
}
