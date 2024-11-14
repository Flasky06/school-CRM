import { Building, CircleGauge, Printer, UserRound, Users } from "lucide-react";
import MainMenuItem from "./MainMenuItemProps";

export default function MainMenu({ className }) {
    return (
        <div
            className={`bg-gray-800 text-white w-1/4 min-h-screen ${className}`}
        >
            <h2 className="text-lg font-semibold p-4">Main Menu</h2>
            <MainMenuItem
                text="Dashboard"
                link="/dashboard"
                icon={<CircleGauge size={20} />}
            />
            <MainMenuItem
                text="Students"
                link="/students"
                icon={<Users size={20} />}
            />
            <MainMenuItem
                text="Teachers"
                link="/teachers"
                icon={<Building size={20} />}
            />
            <MainMenuItem
                text="Classes"
                link="/classes"
                icon={<Building size={20} />}
            />
            <MainMenuItem
                text="Reports"
                link="/reports"
                icon={<Printer size={20} />}
            />
            <MainMenuItem
                text="Admin"
                link="/reports"
                icon={<UserRound size={20} />}
            />
        </div>
    );
}
