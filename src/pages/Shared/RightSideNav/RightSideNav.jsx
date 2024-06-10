import { RiGoogleFill } from "react-icons/ri";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full mt-2">
              <RiGoogleFill></RiGoogleFill>
                Login with Google
                </button>
                <button className="btn btn-outline w-full mt-2">
               <FaGithub></FaGithub>
               Login with GitHub
               </button>
            </div>

            <div className="p-4">
                <h2 className="text-3xl mb-5">Find Us On</h2>
                 <a className=" flex items-center text-lg border rounded-t-lg" href="">
                    <FaFacebook> </FaFacebook>
                    <span className="ml-3 mt[-40px]">Facebook</span>
                 </a>
                 <a className=" flex items-center text-lg border rounded-t-lg mt-1" href="">
                     <FaTwitter></FaTwitter>
                    <span className="ml-3 mt[-40px]">Twitter</span>
                 </a>
                 <a className=" flex items-center text-lg border rounded-t-lg mt-1" href="">
                   <FaInstagram></FaInstagram>
                    <span className="ml-3 mt[-40px]">Instagram</span>
                 </a>
            </div>
            {/* Q Zone */}
            <div className="p-4 space-y-3 mb-6">
         <h2 className="text-3xl">Q Zone</h2>
         <img src={qZone1} alt="" />
         <img src={qZone2} alt="" />
         <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;