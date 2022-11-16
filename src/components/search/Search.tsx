import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import SearchBarSkeleton from '../SearchBarSkeleton';
import { CreateFormContext } from '../Context';
import useFetchObjects from './hooks/useFetchObjects';
import handleTitleChange from './utils/handleTitleChange';
import handleSearchButton from './utils/handleSearchButton';

const Search = () => {

    const context: any = useContext<any>(CreateFormContext);
    const [title, setTitle] = context.title;
    const { objects, isFetching } = useFetchObjects(title);

    return isFetching ? (<SearchBarSkeleton />) :
        <Stack className="search-bar" spacing={22} sx={{ minWidth: 300 }}>
            <Autocomplete
                sx={{ maxHeight: 100 }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={objects.map((object: any) => object.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        onKeyDown={(e) => handleTitleChange(e, setTitle)}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
            <Button variant="contained" onClick={(e) => handleSearchButton(title,setTitle)}>Search Object</Button>
        </Stack>
};

export default Search;