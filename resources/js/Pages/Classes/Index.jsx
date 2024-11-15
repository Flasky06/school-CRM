import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Table";

export default function Classes({ classes }) {
    console.log("classes", classes);

    const columns = [
        { header: "No", key: "id" },
        { header: "Grade Level", key: "class_level" },
        {
            header: "Class Teacher",
            render: (item) => (item.teacher ? item.teacher.name : "No Teacher"),
        },
        {
            header: "Action",
            render: () => (
                <button className="text-blue-500 hover:underline">Edit</button>
            ),
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Table columns={columns} data={classes} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
