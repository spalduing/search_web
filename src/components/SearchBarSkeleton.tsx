import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SearchBarSkeleton = () => {
    return (
        <Box sx={{ minWidth: 300 }}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" height={47.38} />
            </Stack>
        </Box>
    );
};

export default SearchBarSkeleton;