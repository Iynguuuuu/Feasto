import { useState } from 'react';

export const ToggButton = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <div className="md:mt-[140px] md:mx-0 mx-24 mt-8">
                <div className="flex items-center">
                    <span className="mr-3 text-sm font-medium text-text2">Monthly</span>
                    <label className="relative flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleToggle}
                            className="sr-only peer"
                        />
                        <div className="w-[60px] h-8 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                                         after:absolute after:top-[2px] after:left-[2px] after:bg-bcircle after:border-gray-300 after:border-[2px] 
                                        after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                    <span className="ml-3 text-base font-semibold text-text1">Annually</span>
                </div>
            </div>
        </div>
    );
};
