import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import datalist from "../ApiData/data.json"
import { Pagination} from '@mui/material';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectData, getDataSuccess } from '../Redux/CountrySlice';
import { DebounceInput } from 'react-debounce-input';


function CountryList() {
    const [count, setCount] = useState('');
    const [page, setPages] = useState<number>();
    const [totalPage, setTotalPage] = useState<number>();

    const dispatch = useDispatch();
    const dataList = useSelector(selectData);

    const dataGet = () => async (dispatch: any) => {
        const alldata = datalist.countryList
        dispatch(getDataSuccess(alldata));
        setPages(Number(datalist?.currentPage))
        setTotalPage(datalist?.totalPages)
        console.log(datalist, "datalist datalist datalist");

    };

    const requestSearch = (searchedVal: any) => {
        const filteredRows = dataList.filter((row: any) => {
            return row.name.toLowerCase().includes(searchedVal?.toLowerCase())
        });
        if (searchedVal) {
            dispatch(getDataSuccess(filteredRows));
        } else {
            setCount(count + 1)
        }

    };

    const paginationHandleChange = (e:any, p:any) => {
        setPages(p)
        
    }

    useEffect(() => {
        dispatch(dataGet() as any);
    }, [dispatch, count])

    return (
        <div >
            <Container>
                <Row>
                    <Col lg={12} className="mt-2">
                        <div className='_hedaer'>
                            <DebounceInput
                                minLength={2}
                                debounceTimeout={300}
                                onChange={(searchVal) => requestSearch(searchVal.target.value)}
                                placeholder="Search here" />
                        </div>
                    </Col>

                    {dataList?.map((item: any, i: number) =>
                        <Col key={i} lg={3} className="d-flex align-items-stretch mb-4">
                            <div className='card _box__area'>
                                <Link to={`get-a-country-details-cid/${item?.id}/&cname=/${item?.name}`}>
                                    <h3> {item?.name} </h3>
                                </Link>
                                <Link to="/">
                                    <p> {item?.capital} </p>
                                </Link>
                            </div>
                        </Col>
                    )}
                    <Col lg={12} className="mt-2">
                        <Pagination 
                            count={totalPage}
                            onChange={paginationHandleChange} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CountryList