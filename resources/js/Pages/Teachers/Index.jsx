import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Table"; // Adjust the path to the Table component

export default function Index({ teachers }) {
    console.log("teachers", teachers);
    const columns = [
        { header: "No", key: "id" },
        { header: "First Name", key: "first_name" },
        { header: "Last Name", key: "last_name" },
        { header: "Gender", key: "gender" },
        { header: "Phone No", key: "phone_no" },
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
                    {teachers.length > 0 ? (
                        <Table columns={columns} data={teachers} />
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            No teachers available
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
