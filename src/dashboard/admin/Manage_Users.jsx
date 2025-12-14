import React from 'react';
import useAxiosSecure from '../../axios/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Manage_Users = () => {
    const {axiosSecure} = useAxiosSecure();
    const {data: users = [],isLoading} = useQuery({
        queryKey: ['manageUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    return (
            <div className="">
      <h2 className="text-xl font-semibold mb-4">Manage User Requests</h2>

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="table">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 ">
                {/* User + Avatar */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.user_image} alt="user avatar" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{user.user_name}</p>
                      <p className="text-xs opacity-50">{user.user_email}</p>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td>{user.user_email}</td>

                {/* Request Type */}
                <td>
                  <span
                    className={`badge ${
                      user.role === "chef"
                        ? "badge-primary"
                        : "badge-secondary"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`badge ${
                      user.status === "Active"
                        ? "text-green-600 font-semibold"
                        : "badge-error"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Request Time */}
                <td className="text-sm text-gray-600">
                    {
                        user?.role !== 'Admin' && 
                        <button className='btn btn-primary btn-xs text-white'>Make a Fraud</button>
                        
                    }
                </td>

                {/* Action Buttons */}
                {/* <td className="space-x-4 flex items-center justify-between">
                  <button
                    disabled={req.request_status !== "Pending"}
                    onClick={() =>
                      handleManageRequest(
                        req?._id,
                        "Accepted",
                        req.request_type
                      )
                    }
                    className="btn btn-success btn-xs text-white"
                  >
                    Accept
                  </button>
                  <button
                    disabled={req.request_status !== "Pending"}
                    onClick={() =>
                      handleManageRequest(
                        req?._id,
                        "Rejected",
                        req.request_type
                      )
                    }
                    className="btn btn-error btn-xs text-white"
                  >
                    Reject
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Manage_Users;