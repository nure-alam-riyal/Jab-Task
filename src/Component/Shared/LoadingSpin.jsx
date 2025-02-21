
import { Spin } from 'antd';


const LoadingSpin = () => {
    return (
<div className='flex justify-center items-center '>
<div className='w-7/12' >
            <Spin className='text-7xl' />
        </div>
</div>
    );
};

export default LoadingSpin;