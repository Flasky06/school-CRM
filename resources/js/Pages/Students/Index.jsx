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
                <button className="text-blue-500 hover:underline">Edit</button>
            ),
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex justify-end mt-10 max-w-5xl mx-auto bg-red-700 py-2">
                <Link
                    href="/students/add-new"
                    className="text-white bg-green-800 py-1 px-2 rounded cursor-pointer"
                >
                    + Add new Student
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
