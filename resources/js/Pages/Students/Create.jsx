import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        admno: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "male",
        guardian_name: "",
        guardian_contact: "",
        enrollment_year: new Date().getFullYear(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("students.store"));
        console.log("Form submitted:", data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Student" />
            <h2 className="max-w-4xl mx-auto mt-4 text-2xl font-semibold text-blue-500 mb-4">
                Add New Student
            </h2>
            <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Admission Number */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Admission No:
                        </label>
                        <input
                            type="text"
                            name="admno"
                            value={data.admno}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.admno && (
                            <span className="text-red-500 text-sm">
                                {errors.admno}
                            </span>
                        )}
                    </div>

                    {/* First Name */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            First Name:
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.first_name && (
                            <span className="text-red-500 text-sm">
                                {errors.first_name}
                            </span>
                        )}
                    </div>

                    {/* Middle Name */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Middle Name:
                        </label>
                        <input
                            type="text"
                            name="middle_name"
                            value={data.middle_name}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.middle_name && (
                            <span className="text-red-500 text-sm">
                                {errors.middle_name}
                            </span>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            name="last_name"
                            value={data.last_name}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.last_name && (
                            <span className="text-red-500 text-sm">
                                {errors.last_name}
                            </span>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.date_of_birth && (
                            <span className="text-red-500 text-sm">
                                {errors.date_of_birth}
                            </span>
                        )}
                    </div>

                    {/* Gender */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Gender:
                        </label>
                        <select
                            name="gender"
                            value={data.gender}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && (
                            <span className="text-red-500 text-sm">
                                {errors.gender}
                            </span>
                        )}
                    </div>

                    {/* Guardian Name */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Guardian Name:
                        </label>
                        <input
                            type="text"
                            name="guardian_name"
                            value={data.guardian_name}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.guardian_name && (
                            <span className="text-red-500 text-sm">
                                {errors.guardian_name}
                            </span>
                        )}
                    </div>

                    {/* Guardian Contact */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Guardian Contact:
                        </label>
                        <input
                            type="tel"
                            name="guardian_contact"
                            value={data.guardian_contact}
                            onChange={handleChange}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.guardian_contact && (
                            <span className="text-red-500 text-sm">
                                {errors.guardian_contact}
                            </span>
                        )}
                    </div>

                    {/* Enrollment Year */}
                    <div className="flex flex-row gap-4 items-center">
                        <label className="block text-gray-700 font-medium w-40 text-right">
                            Enrollment Year:
                        </label>
                        <input
                            type="number"
                            name="enrollment_year"
                            value={data.enrollment_year}
                            onChange={handleChange}
                            min={new Date().getFullYear() - 5}
                            max={new Date().getFullYear() + 1}
                            className="w-72 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.enrollment_year && (
                            <span className="text-red-500 text-sm">
                                {errors.enrollment_year}
                            </span>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-4 justify-end">
                        <Link
                            href="/students"
                            className="w-40 bg-red-500 py-1 px-3 text-white rounded-lg shadow transition-all hover:bg-red-600 text-center"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="w-40 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
