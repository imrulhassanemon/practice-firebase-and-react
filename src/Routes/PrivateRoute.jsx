import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
// import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span class="loading loading-infinity loading-lg"></span>
    //  (
    //   <div className="flex justify-center items-center border h-screen border-red-700">
    //     <CirclesWithBar
    //       height="100"
    //       width="100"
    //       color="#4fa94d"
    //       outerCircleColor="#4fa94d"
    //       innerCircleColor="#4fa94d"
    //       barColor="#4fa94d"
    //       ariaLabel="circles-with-bar-loading"
    //       wrapperStyle={{}}
    //       wrapperClass=""
    //       visible={true}
    //     />
    //   </div>
    // );
  }

  if(user){
    return children;
  }




  return(
  <Navigate to={"/login"}></Navigate>
);
    
};

export default PrivateRoute;
