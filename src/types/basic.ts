export type SearchData =
    | ApiLogsData
    | AccessLogsData
    | UsersData
    | FactoriesData
    | AlcModelData
    | ProcessesData
    | BoomsData
    | BoomsRetrieveData
    | DepartmentsData
    | CustomerData
    | ProductData
    | WarehouseData;

export type SelectData = {
    id: number;
    checked: boolean;
    data:
        | SystemData
        | ItemData
        | ProcessesTypeData
        | RollsData
        | MenusData
        | FoldersData
        | FilesData
        | Menus;
};

//Common Type
export type Menus = {
    id: number;
    name: string;
};
type authorityInfo = {
    id: number;
    name: string;
};

// 시스템파라미터
export type SystemData = {
    id: number;
    parameterKey: string;
    parameterData: string;
    activation: boolean;
    comment: string | null;
};

// 로그정보 API
export type ApiLogsData = {
    id: number;
    action: string;
    deptName: string;
    authority: authorityInfo;
    useLoginId: string;
    createdAt: string;
    ip: string;
};

// System Access Log
export type AccessLogsData = {
    id: number;
    action: string;
    departmentName: string;
    authority: authorityInfo;
    createdAt: string;
    useLoginId: string;
};

// 공통 코드
export type SharedCodeData = {
    id: number;
    code: string; //공통코드
    name: string; //코드명
};

export type ItemData = {
    id: number;
    parentId: number;
    code: string; //구분코드
    name: string; //구분먕
    details: string;
    activation: boolean; //사용여부
};

// 권한 그룹
export type RollsData = {
    id: number;
    name: string;
    menuIds: string;
};

export type MenusData = {
    id: number;
    type: string;
    name: string;
};

// 부서 코드
export type DepartmentsData = {
    id: number;
    name: string;
    parentDepartmentId: number;
    note: string;
};

// 사용자 코드
export type UsersData = {
    empSeq: string;
    empName: string;
    deptSeq: string;
    umjdName: number;
    umjpName: string;
    empid: string;
    email: string;
    authority: string;
    retireType: string;
    id: string;
};

// 사업장 코드
export type FactoriesData = {
    id: number; //워크센터 코드
    name: string; //워크센터명
    factUnit: string; //생산사업장코드
    factUnitName: string; //생산사업장명
    smWorkCenterType: number; //워크센터구분
    partner: PartnerData;
    startDate: string;
    endDate: string;
    matOutWhSeq: number; //불출창고
    fieldWhSeq: number; //현장창고
    prodInWhSeq: number; //생산입고창고
};

type PartnerData = {
    id: number; // 거래처 코드
    partnerName: string;
    businessNumber: string;
};

// 거래처 코드
export type CustomerData = {
    id: number; // 거래처코드
    name: string; // 거래처명
    ceoName: string; // 대표자명
    managerName: string; // 담당자명
    phone: number; // 전화번호
    phone2: string; //휴대폰번호
    faxNumber: string; // FAX
    address: string; // 주소
    lawRegNo: string; // 법인번호
    bizType: string; // 업태
    bizKind: string; // 종목
    businessNumber: string; // 사업자번호
    smCustStatus: number; //거래처상태
};

// ALC 모델코드
export type AlcModelData = {
    name: string; // 모델
    partnerName: string; // 거래처
    businessNumber: string; // 사업자번호
};

// 공정 코드
export type ProcessesData = {
    id: number;
    name: string;
};

// 공정 일시정지/불량유형
export type ProcessesTypeData = {
    id: number;
    name: string;
    seq: number;
    tag: string;
};

// 품목정보관리
export type ProductData = {
    itemName: string; //품명
    itemNo: string; //품번
    id: number; //품번코드
    spec: string; //규격
    unitName: string; //기준단위
    itemClassSName: string; //품목소분류
    isLotMng: string; //Lot관리여부
    umajorItemClass: string; //품목분류
    regDateTime: string; //생성일
    smStatus: number; //품목상태
};

// BOOM 등록
export type BoomsData = {
    id: string; //모품목코드
    itemName: string; //모품목명
    itemBomRev: string; //모품목차수
    subItemSeq: string; //자품목코드
    subItemName: string; //자품목명
    subItemBomRev: string; //자퓸목차수
    needQtyNumerator: string; //소요량(분자)
    needQtyDenominator: string; //소요량(분모)
};

// BOOM 전개조회
export type BoomsRetrieveData = {
    itemSeq: string;
    itemName: string;
    bomRev: string;
    procSeq: string;
    assyQtyNumerator: string;
    assyQtyDenominator: string;
    matItemSeq: string;
    matItemName: string;
    needQtyNumerator: string;
    needQtyDenominator: string;
};

// 문서관리
export type FoldersData = {
    id: number;
    folderName: string;
};

export type FilesData = {
    id: number;
    fileName: string;
    date: string;
};

// 창고위치관리
export type WarehouseData = {
    id: number;
    whname: string;
    isNotUse: string;
};
