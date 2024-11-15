import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Edit({ student }) {
    const [formData, setFormData] = useState({
        admno: student.admno,
        first_name: student.first_name,
        middle_name: student.middle_name,
        last_name: student.last_name,
        date_of_birth: student.date_of_birth,
        guardian_name: student.guardian_name,
        guardian_contact: student.guardian_contact,
        enrollment_year: student.enrollment_year,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your API to update the student data
        console.log("Form submitted:", formData);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Student" />
            <h2 className="max-w-4xl mx-auto mt-4 text-2xl font-semibold text-blue-500 mb-4">
                Edit Student Information
            </h2>
            <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Admission No:
                        </label>
                        <input
                            type="text"
                            name="admno"
                            value={formData.admno}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Other form fields go here... */}

                    {/* Submit and Cancel Buttons */}
                    <div className="flex flex-row gap-2">
                        <button
                            type="button"
                            className="w-72 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-72 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
