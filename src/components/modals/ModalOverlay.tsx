export const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="fixed inset-0 w-full h-full bg-black/[0.5] z-99">
            <div className="absolute top-1/3 left-1/2 translate-center flex justify-center items-center bg-white text-black rounded-lg">
                {children}
            </div>
        </div>
    );
};
