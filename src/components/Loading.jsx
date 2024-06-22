const Loading = () => {
    return (
        <div className='flex items-center gap-1 justify-center min-h-[calc(100vh-380px)] animate-pulse duration-75'>
            <div className='flex items-baseline gap-1'>
                <div className='w-7 h-7 border-4 rounded-full bg-transparent hover:animate-bounce border-red-700'></div>
                <div className='w-10 h-10 border-4 rounded-full bg-transparent animate-bounce border-red-700'></div>
                <div className='w-8 h-8 border-4 rounded-full bg-transparent animate-bounce hover:animate-none border-red-700'></div>
            </div>
        </div>
    );
};

export default Loading;