import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Table from "@/Components/Table"; // Adjust path as needed

export default function Students({ students }) {
    const columns = [
        { header: "No", key: "id" },
        { header: "AdmNo", key: "admno" },
        { header: "First Name", key: "first_name" },
        { header: "Middle Name", key: "middle_name" },
        { header: "Last Name", key: "last_name" },
        { header: "Date of Birth", key: "date_of_birth" },
        { header: "Guardian Name", key: "guardian_name" },
        { header: "Guardian Contact", key: "guardian_contact" },
        { header: "Admission Year", key: "enrollment_year" },
        {
            header: "Action",
            render: (item) => (
                <Link
                    href={route("students.edit", item.id)}
                    className="text-blue-500 hover:underline"
                >
                    Edit
                </Link>
            ),
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex justify-end mt-10 max-w-5xl mx-auto py-2">
                <Link
                    href={route("students.create")}
                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                >
                    Add New
                </Link>
            </div>
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Table columns={columns} data={students} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
