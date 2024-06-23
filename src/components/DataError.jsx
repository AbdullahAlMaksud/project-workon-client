import { TbMoodSadFilled } from 'react-icons/tb';

const DataError = ({ error }) => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <span className='text-3xl font-bold font-relaway text-gray-400 '>
                An error occurred!
            </span>
            <TbMoodSadFilled className='text-[100px] text-red-200 ' />
            <p className='text-xl text-red-500 font-relaway font-bold'>{error}</p>
        </div>
    );
};

export default DataError;