"use client";

// import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { mainMenuState, pathState } from "@/store/menu";
import ArrowRightIcon from "../../../public/icons/chevronRight.svg";
// import { logout } from '@/utils/auth/helpers'

export const Header = () => {
    // const router = useRouter();

    const mainMenu = useRecoilValue(mainMenuState);
    const subPath = useRecoilValue(pathState("subPath"));
    const thirdPath = useRecoilValue(pathState("thirdPath"));

    const selectedSubmenu = mainMenu?.subMenu.find(
        (menu) => menu.subPath === subPath
    );
    const selectedThirdMenu = selectedSubmenu?.thirdMenu?.find(
        (thirdMenu) => thirdMenu.thirdPath === thirdPath
    );

    // const handleLogout = () => {
    //     logout();

    //     router.push("/login");
    // };

    return (
        <div className="flex w-full justify-between gap-2 bg-neutral-100 p-4 align-middle text-sm text-neutral-700">
            <div className="flex align-middle">
                <div className="flex items-center gap-2">
                    <span>홈</span>
                    <div className="w-4">
                        <ArrowRightIcon />
                    </div>
                </div>
                {mainMenu?.name && (
                    <div className="flex items-center gap-2">
                        <span>{mainMenu?.name}</span>
                        <div className="w-4">
                            <ArrowRightIcon />
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <span>{selectedSubmenu?.subName} </span>
                </div>
                {selectedThirdMenu && (
                    <div className="flex items-center gap-2">
                        <div className="w-4">
                            <ArrowRightIcon />
                        </div>
                        <span>{selectedThirdMenu?.thirdName} </span>
                    </div>
                )}
            </div>

            {/* <div>
                <button
                    className="text-lg hover:underline"
                    onClick={handleLogout}
                >
                    로그아웃
                </button>
            </div> */}
        </div>
    );
};
