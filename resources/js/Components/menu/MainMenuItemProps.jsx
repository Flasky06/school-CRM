import { Link } from "@inertiajs/react";

export default function MainMenuItem({ icon, link, text }) {
    return (
        <Link
            href={link}
            className="flex items-center space-x-2 p-4 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"
        >
            {icon}
            <span>{text}</span>
        </Link>
    );
}
