import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../axios/useAxiosSecure";
import useAuth from "../authentication/useAuth";

const useUserData = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { data: userdata = {} } = useQuery({
    queryKey: ["email", email],
    queryFn: async () => {
      if (email) {
        const res = await axiosSecure.get(`/user/${email}`);
        return res.data;
      }
    },
  });

  return userdata;
};

export default useUserData;
