import React, { useState, useMemo, useEffect, useRef } from "react";
import useAxiosSecure from "../../axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Manage_Users = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: users = [], isLoading ,refetch} = useQuery({
    queryKey: ["manageUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data || [];
    },
  });
  const handleMakeFraud = (id) => {
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "Are you want to update status to Fraud?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            axiosSecure.patch(`/update-user/${id}`).then((res) => {
              if (res.data.modifiedCount) {
                refetch()
                Swal.fire({
                  title: "Updated!",
                  text: "User Status Updated to Fraud",
                  icon: "success",
                });
              }
            });
          } catch {
            console.log("Something went wrong to update");
          }
        }
      });
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let list = Array.isArray(users) ? users.slice() : [];
    if (q) {
      list = list.filter((u) => {
        const name = (u.user_name || "").toLowerCase();
        const email = (u.user_email || "").toLowerCase();
        return name.includes(q) || email.includes(q);
      });
    }

    // sorting
    list.sort((a, b) => {
      if (sortOption === "name-asc")
        return (a.user_name || "").localeCompare(b.user_name || "");
      if (sortOption === "name-desc")
        return (b.user_name || "").localeCompare(a.user_name || "");
      if (sortOption === "role-asc")
        return (a.role || "").localeCompare(b.role || "");
      if (sortOption === "role-desc")
        return (b.role || "").localeCompare(a.role || "");
      // newest / oldest fallback to createdAt if present
      const ta = new Date(a.createdAt || a.created_at || 0).getTime();
      const tb = new Date(b.createdAt || b.created_at || 0).getTime();
      return sortOption === "oldest" ? ta - tb : tb - ta;
    });

    return list;
  }, [users, searchQuery, sortOption]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <p className="text-sm text-gray-600">
            Review user accounts, change roles and monitor status.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="select select-bordered"
            >
              <option value="newest">Sort: Newest</option>
              <option value="oldest">Sort: Oldest</option>
              <option value="name-asc">Name A → Z</option>
              <option value="name-desc">Name Z → A</option>
              <option value="role-asc">Role A → Z</option>
              <option value="role-desc">Role Z → A</option>
            </select>
          </div>
        </div>
      </div>
      {/* User Details Modal (animated with Framer Motion) */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, pointerEvents: "auto" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setSelectedUser(null)}
          />

          <motion.div
            ref={null}
            className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 pointer-events-auto"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="User details dialog"
          >
            <div className="flex items-start justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">User Details</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="mask mask-squircle h-24 w-24 mb-4">
                  <img
                    src={
                      selectedUser.user_image ||
                      selectedUser.image ||
                      "/favicon.ico"
                    }
                    alt={selectedUser.user_name || selectedUser.name}
                  />
                </div>
                <h4 className="text-xl font-bold">
                  {selectedUser.user_name ||
                    selectedUser.name ||
                    selectedUser.displayName}
                </h4>
                <p className="text-sm text-gray-600">
                  {selectedUser.user_email || selectedUser.email}
                </p>
                <p className="mt-3 text-sm">
                  Joined:{" "}
                  {new Date(
                    selectedUser.createdAt ||
                      selectedUser.created_at ||
                      Date.now()
                  ).toLocaleDateString()}
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs text-gray-500">Role</h5>
                    <p className="font-medium">{selectedUser.role || "user"}</p>
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500">Status</h5>
                    <p
                      className={`font-medium ${
                        selectedUser.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {selectedUser.status || "Unknown"}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500">Phone</h5>
                    <p className="font-medium">
                      {selectedUser.phone || selectedUser.user_phone || "-"}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500">Address</h5>
                    <p className="font-medium">
                      {(selectedUser.address &&
                        (selectedUser.address.city ||
                          selectedUser.address.country)) ||
                        selectedUser.user_address ||
                        "-"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h5 className="text-xs text-gray-500">Notes / Bio</h5>
                    <p className="text-sm text-gray-700">
                      {selectedUser.bio || selectedUser.note || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t">
              <button
                onClick={() => setSelectedUser(null)}
                className="btn btn-ghost"
              >
                Close
              </button>
              <button className="btn btn-primary text-white">
                Make a Fraud
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        {isLoading ? (
          <div className="p-8">
            <Loader />
          </div>
        ) : (
          <table className="table w-full">
            <thead className="bg-gray-100">
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user._id || user.id || user.user_email}
                    className="hover:bg-gray-50"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                user.user_image || user.image || "/favicon.ico"
                              }
                              alt={user.user_name || user.name || "avatar"}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold">
                            {user.user_name ||
                              user.name ||
                              user.displayName ||
                              "—"}
                          </p>
                          <p className="text-xs opacity-50">
                            {user.user_email || user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{user.user_email || user.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.role === "chef"
                            ? "badge-primary"
                            : "badge-secondary"
                        }`}
                      >
                        {user.role || "user"}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`${
                          user.status === "Active"
                            ? "text-green-600 font-semibold"
                            : "text-red-600"
                        }`}
                      >
                        {user.status || "Unknown"}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="btn btn-sm btn-ghost"
                        >
                          View
                        </button>
                        {user?.role !== "Admin"   ? (
                          <button
                          disabled={user.status ==='Fraud'}
                            onClick={() => handleMakeFraud(user._id)}
                            className="btn btn-sm btn-primary text-white"
                          >
                            Make a Fraud
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Manage_Users;
