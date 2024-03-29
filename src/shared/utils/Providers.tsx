'use client';
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface ProvidersProps {
    children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
    const pathname = usePathname();
    return (
        <NextUIProvider>
            {pathname !== "/dashboard/new-email" &&
                pathname !== "/" &&
                pathname !== "sign-up" &&
                pathname !== "subscribe" &&
                pathname !== "/sign-in" ? (

                <div className="w-full flex ">
                    <div className="w-[290px] h-screen overflow-y-scroll">

                    </div>
                </div>
            ) : (
                <>{children}</>
            )}
        </NextUIProvider>
    );
};