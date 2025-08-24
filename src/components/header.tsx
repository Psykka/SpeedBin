import { Bug, FilePlus2, GitFork, Save, Share2, Text } from "lucide-react";
import { ResponsiveIcon } from "./ui/icon";

type Button = {
    title: string;
    icon: React.ReactElement;
    action?: () => void;
};

const buttons: Button[] = [
    {
        title: "Save the current paste",
        icon: <ResponsiveIcon icon={Save} size="md" />
    },
    {
        title: "Create a new paste",
        icon: <ResponsiveIcon icon={FilePlus2} size="md" />
    },
    {
        title: "Fork the current paste",
        icon: <ResponsiveIcon icon={GitFork} size="md" />
    },
    {
        title: "View the raw text of the current paste",
        icon: <ResponsiveIcon icon={Text} size="md" />
    },
    {
        title: "Share the current paste",
        icon: <ResponsiveIcon icon={Share2} size="md" />
    },
    {
        title: "Report an issue with the current paste",
        icon: <ResponsiveIcon icon={Bug} size="md" />
    }
];


export function HeaderButton({ title, icon, action }: Button) {
    return (
        <button
            title={title}
            onClick={action}
            className="flex items-center p-2 text-midnightpurple-foreground hover:text-midnightpurple-foreground-secondary transition-all duration-150"
        >
            {icon}
        </button>
    );
}

export function Header() {
    return (
        <header className="sm:absolute bg-midnightpurple-secondary top-0 right-0 flex flex-col items-center select-none mb-2 z-1">
            <div className="text-4xl font-logo py-2 italic text-midnightpurple-foreground group">
                <span className="logo transition-[text-shadow] duration-150">
                    Speed
                </span>
                <span className="font-bold">
                    Bin
                </span>
            </div>
            <div className="bg-midnightpurple-tertiary flex flex-row w-full gap-2 sm:gap-0 justify-center">
                {buttons.map((button) => (
                    <HeaderButton key={button.title} {...button} />
                ))}
            </div>
        </header>
    );
}