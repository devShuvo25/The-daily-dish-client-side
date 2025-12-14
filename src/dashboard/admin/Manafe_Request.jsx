import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../axios/useAxiosSecure";
import useAuth from "../../hooks/authentication/useAuth";
import Swal from "sweetalert2";

const Manage_Request = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["user-role"],
    queryFn: async () => {
      const res = axiosSecure.get("/user-request");
      return (await res).data;
    },
  });

  const handleManageRequest = (id, action, type) => {
    if (id && action) {
      Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to ${action.slice(
          0,
          -2
        )} this request as a ${type}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Yes, ${action.slice(0, -2)}`,
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(
              `/user-request?id=${id}&action=${action}&type=${type}&email=${user?.email}`
            )
            .then((res) => {
              if (res.data) {
                refetch();
                Swal.fire({
                  title: action,
                  text: `Your request has been ${action}`,
                  icon: "success",
                });
              }
            });
        }
      });
    }
  };

  return (
    <div className="px-2 sm:px-4 lg:px-6">
      <h2 className="text-xl font-semibold mb-4">
        Manage User Requests
      </h2>

      {/* ===================== MOBILE VIEW ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {requests.map((req) => (
          <div
            key={req._id}
            className="bg-white rounded-lg shadow p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={req.user_image}
                alt="user"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{req.user_name}</p>
                <p className="text-xs text-gray-500">
                  {req.user_email}
                </p>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Request Type</span>
              <span className="badge badge-secondary">
                {req.request_type}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span
                className={`badge ${
                  req.request_status === "Pending"
                    ? "badge-warning"
                    : req.request_status === "Accepted"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                {req.request_status}
              </span>
            </div>

            <p className="text-xs text-gray-400">
              {req.request_time}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                disabled={req.request_status !== "Pending"}
                onClick={() =>
                  handleManageRequest(
                    req?._id,
                    "Accepted",
                    req.request_type
                  )
                }
                className="btn btn-success btn-sm text-white w-full sm:w-auto sm:flex-1"
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
                className="btn btn-error btn-sm text-white w-full sm:w-auto sm:flex-1"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== TABLET + DESKTOP ===================== */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow bg-white">
        <table className="table min-w-[900px]">
          <thead className="bg-gray-100">
            <tr>
              <th>User</th>

              <th>Request Type</th>
              <th>Status</th>
              <th>Request Time</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr
                key={req._id}
                className="hover:bg-gray-50"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={req.user_image} alt="user" />
                    </div>
                    <div>
                      <p className="font-bold">{req.user_name}</p>
                      <p className="text-xs opacity-50">
                        {req.user_email}
                      </p>
                    </div>
                  </div>
                </td>



                <td>
                  <span className="badge badge-secondary">
                    {req.request_type}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      req.request_status === "Pending"
                        ? "badge-warning"
                        : req.request_status === "Accepted"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {req.request_status}
                  </span>
                </td>

                <td className="text-sm text-gray-600">
                  {req.request_time}
                </td>

                <td className="flex items-center gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage_Request;
