import React from 'react'

const TableComponent = ({ data }) => {
    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        Sno.
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
            </thead>



            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <th>{index + 1}</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">{item.title}</div>
                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                </div>
                            </div>
                        </td>
                        <td>
                            {item.date}
                            <br />
                            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                        </td>
                        <td>Purple</td>
                        <td>
                            <div className="flex items-center gap-1">
                                <button className="btn btn-secondary btn-sm">View</button>
                                <button className="btn btn-warning btn-sm">Edit</button>
                                <button className="btn btn-error btn-sm">Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>



            {/* foot */}
            <tfoot>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    )
}

export default TableComponent;