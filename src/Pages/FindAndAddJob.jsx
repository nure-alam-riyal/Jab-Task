
import { IoMdAdd } from "react-icons/io";
import { SiIconfinder } from "react-icons/si";
import { Link } from "react-router-dom";


const FindAndAddJob = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-semibold text-4xl">Select Your Choice</h2>
        <div className="flex justify-center mt-12 gap-10">
          <Link to="findandadd/addjob">
            <div className="card  shadow-xl px-10 py-6">
              <div className="flex justify-center">
                <SiIconfinder className="text-5xl findJob text-center" />
              </div>
              <div className="">
                <h2 className="font-semibold text-text text-4xl text-center">Find Job</h2>


              </div>
            </div>
          </Link>
          <Link to="/findandadd/addjob">
            <div className="card  shadow-xl px-10 py-6">
              <div className="flex justify-center">
                <IoMdAdd className="text-5xl findJob text-center" />
              </div>
              <div className="">
                <h2 className="font-semibold text-text text-4xl text-center">Add Job</h2>


              </div>
            </div></Link>

        </div>




      </div>
    </div>
  );
};

export default FindAndAddJob;