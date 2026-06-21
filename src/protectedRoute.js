// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

//  const ProtectedRoute=({children})=>{
//     const {loading,isAuthenticated}=useSelector((state)=>state.user);
//     if(loading===false){
//       if(!isAuthenticated){
//         return <Navigate to={`/log-in`} replace />
//      }
//      return children
//     }
    
//  }

//  export default ProtectedRoute

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "./components/Layout/Loader";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  if (loading) {
    return <Loader/>
  }

  if (!isAuthenticated) {
    return <Navigate to="/log-in" replace />;
  }

  return children;
};

export default ProtectedRoute;