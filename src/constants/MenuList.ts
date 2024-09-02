export type ThirdMenu = {
	thirdName: string
	thirdPath: string
}

export type SubMenu = {
	subName: string
	subPath: string
	thirdMenu?: ThirdMenu[]
}

export type Menu = {
	name: string
	path: string
	subMenu: SubMenu[]
}

export const MenuList: Menu[] = [
	{
		name: '기준정보관리',
		path: 'basic',
		subMenu: [
			{
				subName: '시스템 파라미터 관리',
				subPath: 'system-params',
			},
			{
				subName: '로그정보 API 연동',
				subPath: 'api-logs',
			},
			{
				subName: 'System Access Logs',
				subPath: 'access-logs',
			},
			{
				subName: '공통 코드',
				subPath: 'shared-code',
			},
			{
				subName: '권한그룹',
				subPath: 'rolls',
			},
			{
				subName: '부서 코드',
				subPath: 'departments',
			},
			{
				subName: '사용자 코드',
				subPath: 'users',
			},
			{
				subName: '사업장 코드',
				subPath: 'factories',
			},
			{
				subName: '거래처 코드',
				subPath: 'customers',
			},
			{
				subName: 'ALC 모델코드',
				subPath: 'alc-model',
			},
			{
				subName: '공정 코드',
				subPath: 'processes',
			},
			{
				subName: '공정 일시정지 유형',
				subPath: 'pause',
			},
			{
				subName: '공정별 불량유형 관리',
				subPath: 'defect',
			},
			{
				subName: '품목정보관리',
				subPath: 'products',
			},
			{
				subName: 'BOM 등록',
				subPath: 'boms',
			},
			{
				subName: 'BOM 전개조회',
				subPath: 'boms-retrieve',
			},
			{
				subName: '문서관리(파일첨부)',
				subPath: 'documents',
			},
			{
				subName: '창고위치관리',
				subPath: 'warehouses',
			},
		],
	},
	{
		name: 'MES',
		path: 'mes',
		subMenu: [
			{
				subName: '영업관리',
				subPath: 'order',
				thirdMenu: [
					{
						thirdName: '수주등록',
						thirdPath: 'order-register',
					},
					{
						thirdName: '수주현황',
						thirdPath: 'order-list',
					},
					{
						thirdName: '납품정보등록',
						thirdPath: 'order-delivery-register',
					},
					{
						thirdName: '납품현황',
						thirdPath: 'order-deliveries',
					},
				],
			},
			{
				subName: '생산관리',
				subPath: 'operation',
				thirdMenu: [
					{
						thirdName: '작업지시서등록',
						thirdPath: 'operation-register',
					},
					{
						thirdName: '작업지시서리스트',
						thirdPath: 'operation-list',
					},
					{
						thirdName: '작업일보리스트',
						thirdPath: 'operation-daily-list',
					},
					{
						thirdName: '작업완료리스트',
						thirdPath: 'operation-finished',
					},
					{
						thirdName: '정지유형별통계현황',
						thirdPath: 'operation-pause-statistics',
					},
				],
			},
			{
				subName: '입출고관리',
				subPath: 'warehousing',
				thirdMenu: [
					{
						thirdName: '입고의뢰',
						thirdPath: 'warehousing-incoming-request',
					},
					{
						thirdName: '입고등록',
						thirdPath: 'warehousing-incoming-register',
					},
					{
						thirdName: '입고현황',
						thirdPath: 'warehousing-incoming',
					},
					{
						thirdName: '입고반품등록',
						thirdPath: 'warehousing-return-register',
					},
				],
			},
			{
				subName: '설비금형기준',
				subPath: 'equipment',
				thirdMenu: [
					{
						thirdName: '주변장치기준정보',
						thirdPath: 'equipment-surround-device',
					},
					{
						thirdName: '기계기준정보',
						thirdPath: 'equipment-machine',
					},
					{
						thirdName: '금형기준',
						thirdPath: 'equipment-mold',
					},
					{
						thirdName: '공구기준',
						thirdPath: 'equipment-tool',
					},
				],
			},
			{
				subName: '품질관리',
				subPath: 'quality',
				thirdMenu: [
					{
						thirdName: '불량유형통계',
						thirdPath: 'quality-defect-statistics',
					},
					{
						thirdName: '초중종검사리스트',
						thirdPath: 'quality-midranges',
					},
					{
						thirdName: '작업표준서관리',
						thirdPath: 'quality-work-standard',
					},
					{
						thirdName: '변경점정보등록',
						thirdPath: 'quality-changes-register',
					},
					{
						thirdName: '변경점정보리스트',
						thirdPath: 'quality-changes',
					},
					{
						thirdName: '수입검사',
						thirdPath: 'quality-pre-warehouse',
					},
					{
						thirdName: '완제품검사',
						thirdPath: 'quality-finished',
					},
				],
			},
			{
				subName: 'POP',
				subPath: 'pop',
				thirdMenu: [
					{
						thirdName: '작업지시조회',
						thirdPath: 'pop-work-order',
					},
					{
						thirdName: '생산실적등록',
						thirdPath: 'pop-output-register',
					},
					{
						thirdName: '불량실적등록',
						thirdPath: 'pop-defect-register',
					},
					{
						thirdName: '일시정지등록',
						thirdPath: 'pop-pause-register',
					},
					{
						thirdName: '자재사용등록',
						thirdPath: 'pop-material-usage-register',
					},
				],
			},
			{
				subPath: 'kpi',
				subName: 'KPI',
				thirdMenu: [
					{
						thirdName: '제조리드타임(P)',
						thirdPath: 'kpi-lead-time',
					},

					{
						thirdName: '품질불량률(Q)',
						thirdPath: 'kpi-defect-rate',
					},
					{
						thirdName: '작업공수(C)',
						thirdPath: 'kpi-man-hour',
					},
					{
						thirdName: '수주/납품 리드타임(D)',
						thirdPath: 'kpi-order-lead-time',
					},
					{
						thirdName: '전력사용량(E)',
						thirdPath: 'kpi-power-usage',
					},
					{
						thirdName: 'UPH(P)',
						thirdPath: 'kpi-uph',
					},
					{
						thirdName: '설비가동률(P)',
						thirdPath: 'kpi-operation',
					},
				],
			},
			{
				subPath: 'stock',
				subName: '재고관리',
				thirdMenu: [
					{
						thirdName: '재고조정',
						thirdPath: 'stock-adjust',
					},
					{
						thirdName: '재고이동',
						thirdPath: 'stock-move',
					},
					{
						thirdName: '현재고현황',
						thirdPath: 'stock-current',
					},
					{
						thirdName: '재고수불이력',
						thirdPath: 'stock-inventory',
					},
					{
						thirdName: '재고바고드해체',
						thirdPath: 'stock-barcode-off',
					},
					{
						thirdName: '재고바코드병합',
						thirdPath: 'stock-barcode-merge',
					},
					{
						thirdName: '안전재고부족조회',
						thirdPath: 'stock-safety',
					},
					{
						thirdName: '재고수명조회',
						thirdPath: 'stock-lifecycle',
					},
				],
			},
		],
	},
	{
		path: 'scm',
		name: 'SCM',
		subMenu: [
			{
				subName: '영업관리(고객사)',
				subPath: 'customer-order',
				thirdMenu: [
					{
						thirdName: '발주등록(고객사)',
						thirdPath: 'customer-order-register',
					},
					{
						thirdName: '수주현황(미래)',
						thirdPath: 'customer-order',
					},
					{
						thirdName: '납품정보등록(미래)',
						thirdPath: 'customer-order-delivery-register',
					},
					{
						thirdName: '납품현황(고객사)',
						thirdPath: 'customer-order-customer-delivery',
					},
					{
						thirdName: '납품현황(미래)',
						thirdPath: 'customer-order-delivery',
					},
				],
			},
			{
				subName: '영업관리(협력사)',
				subPath: 'partner-order',
				thirdMenu: [
					{
						thirdName: '발주등록(미래)',
						thirdPath: 'partner-order-register',
					},
					{
						thirdName: '수주현황(협력사)',
						thirdPath: 'partner-order',
					},
					{
						thirdName: '납품정보등록(협력사)',
						thirdPath: 'partner-order-delivery-register',
					},
					{
						thirdName: '납품현황(미래)',
						thirdPath: 'partner-order-delivery',
					},
					{
						thirdName: '납품현황(협력사)',
						thirdPath: 'partner-order-partner-delivery',
					},
				],
			},
			{
				subName: '입고관리(협력사)',
				subPath: 'partner-warehousing',
				thirdMenu: [
					{
						thirdName: '입고의뢰',
						thirdPath: 'partner-warehousing-request',
					},
					{
						thirdName: '입고등록',
						thirdPath: 'partner-warehousing-register',
					},
					{
						thirdName: '입고현황',
						thirdPath: 'partner-warehousing-incoming',
					},
					{
						thirdName: '라벨발행',
						thirdPath: 'partner-warehousing-name',
					},
				],
			},
		],
	},
	{
		name: 'PMS',
		path: 'pms',
		subMenu: [
			{
				subName: '프레스 모니터링',
				subPath: 'equipment-monitoring',
				thirdMenu: [
					{
						thirdName: '분석 모니터링',
						thirdPath: 'equipment-monitoring-analyze',
					},
					{
						thirdName: '현황 모니터링',
						thirdPath: 'equipment-monitoring-current',
					},
				],
			},
			{
				subName: '프레스 통계분석',
				subPath: 'press-analysis',
				thirdMenu: [
					{
						thirdName: '생산량',
						thirdPath: 'press-analysis-output',
					},
					{
						thirdName: '에러',
						thirdPath: 'press-analysis-equipment-defect',
					},
					{
						thirdName: '전력',
						thirdPath: 'press-analysis-power',
					},
					{
						thirdName: '기계 비가동시간',
						thirdPath: 'press-analysis-downtime',
					},
					{
						thirdName: '작업시간',
						thirdPath: 'press-analysis-working-time',
					},
				],
			},
			{
				subName: '프레스 관리',
				subPath: 'press',
				thirdMenu: [
					{
						thirdName: '에러보기',
						thirdPath: 'press-defects',
					},
					{
						thirdName: '파라미터 보기',
						thirdPath: 'press-parameters',
					},
					{
						thirdName: '캠 보기',
						thirdPath: 'press-cam',
					},
					{
						thirdName: '클러치&브레이크',
						thirdPath: 'press-clutch-break',
					},
					{
						thirdName: '설비수리요청',
						thirdPath: 'press-request-repair',
					},
					{
						thirdName: '설비수리요청리스트',
						thirdPath: 'press-repairs',
					},
					{
						thirdName: '설비수리완료리스트',
						thirdPath: 'press-completed-repair',
					},
					{
						thirdName: '설비문제유형등록',
						thirdPath: 'press-defect-type-register',
					},
					{
						thirdName: '프레스 일상점검 등록',
						thirdPath: 'press-daily-check-register',
					},
					{
						thirdName: '프레스 일상점검 현황',
						thirdPath: 'press-daily-checks',
					},
				],
			},
			{
				subName: '금형관리',
				subPath: 'mold',
				thirdMenu: [
					{
						thirdName: '금형타수',
						thirdPath: 'mold-maintenance',
					},
					{
						thirdName: '금형수리요청',
						thirdPath: 'mold-request-repair',
					},
					{
						thirdName: '금형 수리 요청 리스트',
						thirdPath: 'mold-repairs',
					},
					{
						thirdName: '금형 수리 완료 리스트',
						thirdPath: 'mold-completed-repair',
					},
					{
						thirdName: '금형문제유형등록',
						thirdPath: 'mold-defect-type-register',
					},
					{
						thirdName: '금형 일상점검 등록',
						thirdPath: 'mold-daily-check-register',
					},
					{
						thirdName: '금형 일상점검 현황',
						thirdPath: 'mold-daily-checks',
					},
				],
			},
		],
	},
]
