import React from "react";

export default function Table({ columns, data }) {
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <table className="table-auto w-full border-collapse border border-black">
                <thead className="text-xs uppercase border-b-2">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="border p-2">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="">
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border px-3 py-2 text-gray-800 text-xs uppercase"
                                >
                                    {column.render
                                        ? column.render(item)
                                        : item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
