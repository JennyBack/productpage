import React from 'react';

const useSelectedMenuItem = () => {
    const [selectedMenuItem, setSelectedMenuItem] = React.useState<number>(1);

    const handleSelectMenuItem = (item: number) => {
        setSelectedMenuItem((prevState) => item);
    };

    return {
        handleSelectMenuItem,
        selectedMenuItem
    };
};

export default useSelectedMenuItem;
