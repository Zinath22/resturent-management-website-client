// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";



// const useAdmin = () => {
//     const {user} = useContext(AuthContext);
//     // const axiosSecure = UseAxiosSecure();
//    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
//    queryKey: [user?.email, 'isAdmin'],
//    queryFn: async() => {
//    const res = await fetch.get(`/users/admin/${user.email}`);
//    console.log(res.data);
//    return res.data?.admin;
//    }
//    })
//    return [isAdmin, isAdminLoading]
// };

// export default useAdmin;