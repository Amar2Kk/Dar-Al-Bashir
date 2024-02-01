import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
    return (
        <div className="h-screen p-4">
            <UserButton afterSignOutUrl="/" />
            <p>This is a protected route.</p>
        </div>
    );
}
