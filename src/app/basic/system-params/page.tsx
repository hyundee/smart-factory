"use client";

import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { AddButton } from "@/components/button/AddButton";
import { RemoveButton } from "@/components/button/RemoveButton";
import { SystemDataList } from "@/components/dataList/SystemDataList";
import { CommonModal } from "@/components/modals/CommonModal";
import { DeleteModal } from "@/components/modals/DeleteModal";
import { SelectableHeader } from "@/components/table/SelectableHeader";
import { Title } from "@/components/Inputs/Title";
import { useSelection } from "@/utils/useSelection";
import { modalState } from "@/store/modal";
import { SelectData, SystemData } from "@/types/basic";
import { formatData } from "@/utils/formatData";
import { IModalOption } from "@/types/modal";

const API_BASE_URL = "/api/system/parameters";

const options: IModalOption[] = [
    {
        name: "시스템파라미터 키",
        keyword: "parameterKey",
        required: true,
        text: true,
    },
    {
        name: "시스템파라미터 값",
        keyword: "parameterData",
        required: true,
        text: true,
    },
    {
        name: "비활성화",
        required: true,
        keyword: "activation",
        text: false,
    },
    {
        name: "비고",
        required: false,
        keyword: "comment",
        text: true,
    },
];

export default function SystemParameters() {
    const methods = useForm<FormData>();

    const [dataList, setDataList] = useState<SelectData[]>([]);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useRecoilState(
        modalState("DeleteModal")
    );
    const [isAddModalOpen, setIsAddModalOpen] = useRecoilState(
        modalState("AddModal")
    );

    const { selectedIds, setSelectedIds, updateSelection, selectAll } =
        useSelection(dataList, setDataList, setIsAllChecked);

    const handleAdd = useCallback(() => {
        setIsAddModalOpen({ isOpen: true });
    }, [setIsAddModalOpen]);

    const handleDelete = useCallback(() => {
        setIsDeleteModalOpen({ isOpen: true });
    }, [setIsDeleteModalOpen]);

    // 개별 hecked 상태변경
    const onCheckedChange = useCallback(
        (id: number, checked: boolean) => {
            updateSelection(id, checked);
        },
        [updateSelection]
    );

    // 전체 checked 상태변경
    const handleAllCheckboxChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            selectAll(e.target.checked);
        },
        [selectAll]
    );

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(API_BASE_URL).then((res) => res.json());
            setDataList(
                res.map((data: SystemData) => ({
                    id: data.id,
                    checked: false,
                    data: formatData(data),
                }))
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    const createFormData = useCallback(
        async (formData: SystemData) => {
            try {
                const res = await fetch(API_BASE_URL, {
                    method: "POST",
                    body: JSON.stringify(formData),
                });
                const result = await res.json();
                console.log("Form submitted successfully:", result);
                await fetchData();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        [fetchData]
    );

    const onSubmit = useCallback(
        async (formData: any) => {
            await createFormData({
                ...formData,
                activation: formData.activation === "Y",
            });
            setIsAddModalOpen({ isOpen: false });
            methods.reset();
        },
        [createFormData, methods, setIsAddModalOpen]
    );

    const deleteFormData = useCallback(
        async (ids: number[]) => {
            try {
                await Promise.all(
                    ids.map((id) =>
                        fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" })
                    )
                );
                await fetchData();
            } catch (error) {
                console.error("Error deleting data:", error);
            } finally {
                setIsDeleteModalOpen({ isOpen: false });
                setIsAllChecked(false);
                setSelectedIds([]);
            }
        },
        [fetchData, setIsDeleteModalOpen, setIsAllChecked, setSelectedIds]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <FormProvider {...methods}>
            <Title title="시스템 파라미터 관리" />
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="form-column"
            >
                <div className="flex items-center justify-end gap-x-4">
                    <AddButton addElement={handleAdd} />
                    <RemoveButton removeElement={handleDelete} />
                </div>

                <div>
                    <SelectableHeader
                        headers={options}
                        onChange={handleAllCheckboxChange}
                        isAllChecked={isAllChecked}
                    />
                    <SystemDataList
                        onCheckedChange={onCheckedChange}
                        dataList={dataList}
                    />
                </div>

                {isAddModalOpen.isOpen && (
                    <CommonModal title={"시스템 파라미터"} options={options} />
                )}
                {isDeleteModalOpen.isOpen && (
                    <DeleteModal
                        dataIds={selectedIds}
                        handleDelete={() => deleteFormData(selectedIds)}
                    />
                )}
            </form>
        </FormProvider>
    );
}
