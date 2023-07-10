import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
};

// export const Login = () => {
//     const navigate = useNavigate();

//     const signInWithGoogle = async () => {
//         const result = await signInWithPopup(auth, provider);
//         console.log(result);
//         navigate("/");
//     };

//     return (
//         <div>
//             {/* <p>Sign In With Google To Continue</p> */}
//             <nav>
//                 <button onClick={signInWithGoogle} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
//                     Sing In With Google
//                 </button>
//             </nav>
//         </div>
//     )
// }