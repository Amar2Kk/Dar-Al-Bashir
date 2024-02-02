"use client";
import { UserButton } from "@clerk/nextjs";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div className="h-screen p-4">
            <UserButton afterSignOutUrl="/" />
            <p>This is a protected route.</p>
        </div>
    );
}
