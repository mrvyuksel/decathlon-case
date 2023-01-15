import React, { useState, useEffect } from 'react'
import { getUsers } from "../../core/services/Api";
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Pagination from '@mui/material/Pagination';

function ProfilePage() {

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(10);
    const [pageData, setPageData] = useState([]);
    const [pageDataUpdate, setPageDataUpdate] = useState([]);

    const getUserData = async () => {
        const allData = await getUsers(limit, page) || [];

        if(allData.data.length > 0){
            const pageSize = allData.total / allData.limit;
            const pageSizeCount = pageSize.toFixed();
            setPageData(allData.data)
            setCount(pageSizeCount)
        }
    }

    const handleChange = (e, value) => {
        setPage(value);
    }
    const handleSearch = (e) => {
        if(e.target.value){
            const filterValue = pageData.filter(item => item.firstName.toLowerCase().includes(e.target.value));
            filterValue.length > 0 ? setPageDataUpdate(filterValue) : setPageDataUpdate([]);
        } else{
            setPageDataUpdate([])
        }
    }

    useEffect(() => {
        setLimit(10)
        getUserData()
    }, [page])

  return (
    <>
        <Header title="" handleSearch={handleSearch} />
        <Profile data={pageDataUpdate.length > 0 ? pageDataUpdate : pageData} />
        <div className='pagination'>
            <Pagination count={count} onChange={handleChange} />
        </div>
    </>
  )
}

export default ProfilePage