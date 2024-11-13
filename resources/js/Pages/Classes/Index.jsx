import React from "react";

const StudentsIndex = ({ students }) => {
    return (
        <div>
            <h1>Students List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">AdmNo</th>
                        <th className="border p-2">First Name</th>
                        <th className="border p-2">Middle Name</th>
                        <th className="border p-2">Last Name</th>
                        <th className="border p-2">Date of Birth</th>
                        <th className="border p-2">Guardian Name</th>
                        <th className="border p-2">Guardian Contact</th>
                        <th className="border p-2">Enrollment Year</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.admno}>
                            <td className="border p-2">{student.admno}</td>
                            <td className="border p-2">{student.first_name}</td>
                            <td className="border p-2">
                                {student.middle_name}
                            </td>
                            <td className="border p-2">{student.last_name}</td>
                            <td className="border p-2">
                                {student.date_of_birth}
                            </td>
                            <td className="border p-2">
                                {student.guardian_name}
                            </td>
                            <td className="border p-2">
                                {student.guardian_contact}
                            </td>
                            <td className="border p-2">
                                {student.enrollment_year}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsIndex;
