import { Box } from '@chakra-ui/react';
import React from 'react';
import Main from './_components/Main';
import Course from './_components/Course';

const EducationPage = () => {
    return (
        <Box p={'36px 0'} mt={'72px'}>
            <Main />
            <Course />
        </Box>
    );
}

export default EducationPage;
