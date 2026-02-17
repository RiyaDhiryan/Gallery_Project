import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function MyPagination({index,setIndex}){
     const handleChange = (event, value) => {
    setIndex(value); 
  };
  return (
   <div className='text-white bg-amber-200 px-4 py-4 rounded-lg'>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={index} 
          onChange={handleChange} 
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}
export default MyPagination;