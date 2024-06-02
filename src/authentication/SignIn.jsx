import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const SignIn = () => {

    return (
        <div className='container w-11/12 mx-auto my-10'>
            <div className='flex items-center justify-center'>
                <TabGroup>
                    <TabList className={'bg-gray-300 w-fit px-1 py-1 rounded-full flex gap-4'}>
                        <Tab className="data-[selected]:bg-red-500 data-[selected]:text-white rounded-full px-4 py-1">Sign In</Tab>
                        <Tab className="data-[selected]:bg-black data-[selected]:text-white rounded-full px-4 py-1">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Content 1</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>

        </div >
    );
};

export default SignIn;