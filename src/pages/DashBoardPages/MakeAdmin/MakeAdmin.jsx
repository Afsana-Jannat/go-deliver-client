// import { useState } from "react";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { FaSearch, FaUserShield, FaUserTimes } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const MakeAdmin = () => {
//     const axiosSecure = useAxiosSecure();
//     const [emailQuery, setEmailQuery] = useState("");

//     const {
//         data: users = [],
//         refetch,
//         isFetching,
//     } = useQuery({
//         queryKey: ["searchedUsers", emailQuery],
//         enabled: !!emailQuery,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/search?email=${emailQuery}`);
//             return res.data;
//         },
//     });

//     const { mutateAsync: updateRole } = useMutation({
//         mutationFn: async ({ id, role }) =>
//             await axiosSecure.patch(`/users/${id}/role`, { role }),
//         onSuccess: () => {
//             refetch();
//         },
//     });

//     const handleRoleChange = async (id, currentRole) => {
//         const action = currentRole === "admin" ? "Remove admin" : "Make admin";
//         const newRole = currentRole === "admin" ? "user" : "admin";

//         const confirm = await Swal.fire({
//             title: `${action}?`,
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonText: "Yes",
//             cancelButtonText: "Cancel",
//         });

//         if (!confirm.isConfirmed) return;

//         try {
//             await updateRole({ id, role: newRole });
//             Swal.fire("Success", `${action} successful`, "success");
//         } catch (error) {
//             console.log(error);
//             Swal.fire("Error", "Failed to update user role", "error");
//         }
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Make Admin</h2>

//             <div className="flex gap-2 mb-6 items-center">
//                 <FaSearch />
//                 <input
//                     type="text"
//                     className="input input-bordered w-full max-w-md"
//                     placeholder="Search user by email"
//                     value={emailQuery}
//                     onChange={(e) => setEmailQuery(e.target.value)}
//                 />
//             </div>

//             {isFetching && <p>Loading users...</p>}

//             {!isFetching && users.length === 0 && emailQuery && (
//                 <p className="text-gray-500">No users found.</p>
//             )}

//             {users.length > 0 && (
//                 <div className="overflow-x-auto">
//                     <table className="table w-full table-zebra">
//                         <thead>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>Created At</th>
//                                 <th>Role</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((u) => (
//                                 <tr key={u._id}>
//                                     <td>{u.email}</td>
//                                     <td>{new Date(u.created_at).toLocaleDateString()}</td>
//                                     <td>
//                                         <span
//                                             className={`badge ${u.role === "admin" ? "badge-success" : "badge-ghost"
//                                                 }`}
//                                         >
//                                             {u.role || "user"}
//                                         </span>
//                                     </td>
//                                     <td>
//                                         <button
//                                             onClick={() => handleRoleChange(u._id, u.role || "user")}
//                                             className={`btn btn-sm text-white ${u.role === "admin" ? "btn-error" : "bg-[#533de0]"
//                                                 }`}
//                                         >
//                                             {u.role === "admin" ? (
//                                                 <>
//                                                     <FaUserTimes className="mr-1" />
//                                                     Remove Admin
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <FaUserShield className="mr-1" />
//                                                     Make Admin
//                                                 </>
//                                             )}
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MakeAdmin;


import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FaSearch, FaUserShield, FaUserTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakeAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const [emailQuery, setEmailQuery] = useState("");

    // 1️⃣ Get all users
    const {
        data: allUsers = [],
        refetch: refetchAll,
        isFetching: isFetchingAll,
    } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    // 2️⃣ Search users by email
    const {
        data: searchedUsers = [],
        refetch: refetchSearch,
        isFetching: isFetchingSearch,
    } = useQuery({
        queryKey: ["searchedUsers", emailQuery],
        enabled: !!emailQuery,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/search?email=${emailQuery}`);
            return res.data;
        },
    });

    // 3️⃣ Mutation for updating role
    const { mutateAsync: updateRole } = useMutation({
        mutationFn: async ({ id, role }) =>
            await axiosSecure.patch(`/users/${id}/role`, { role }),
        onSuccess: () => {
            refetchAll();
            refetchSearch();
        },
    });

    const handleRoleChange = async (id, currentRole) => {
        const action = currentRole === "admin" ? "Remove admin" : "Make admin";
        const newRole = currentRole === "admin" ? "user" : "admin";

        const confirm = await Swal.fire({
            title: `${action}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
        });

        if (!confirm.isConfirmed) return;

        try {
            await updateRole({ id, role: newRole });
            Swal.fire("Success", `${action} successful`, "success");
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "Failed to update user role", "error");
        }
    };

    // 4️⃣ Which list to show
    const usersToShow = emailQuery ? searchedUsers : allUsers;
    const isLoading = emailQuery ? isFetchingSearch : isFetchingAll;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Make Admin</h2>

            <div className="flex gap-2 mb-6 items-center">
                <FaSearch />
                <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    placeholder="Search user by email"
                    value={emailQuery}
                    onChange={(e) => setEmailQuery(e.target.value)}
                />
            </div>

            {isLoading && <p>Loading users...</p>}

            {!isLoading && usersToShow.length === 0 && (
                <p className="text-gray-500">
                    {emailQuery ? "No users found." : "No users in the database."}
                </p>
            )}

            {usersToShow.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table w-full table-zebra">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersToShow.map((u) => (
                                <tr key={u._id}>
                                    <td>{u.email}</td>
                                    <td>
                                        {u.created_at
                                            ? new Date(u.created_at).toLocaleDateString()
                                            : "N/A"}
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${u.role === "admin" ? "badge-success" : "badge-ghost"
                                                }`}
                                        >
                                            {u.role || "user"}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleRoleChange(u._id, u.role || "user")
                                            }
                                            className={`btn btn-sm text-white ${u.role === "admin"
                                                    ? "btn-error"
                                                    : "bg-[#533de0]"
                                                }`}
                                        >
                                            {u.role === "admin" ? (
                                                <>
                                                    <FaUserTimes className="mr-1" />
                                                    Remove Admin
                                                </>
                                            ) : (
                                                <>
                                                    <FaUserShield className="mr-1" />
                                                    Make Admin
                                                </>
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MakeAdmin;
