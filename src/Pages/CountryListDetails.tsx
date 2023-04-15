import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import datalist from "../ApiData/data.json"
function CountryListDetails() {
  const { sulg, name } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]) as any
  useEffect(() => {
    const list: any = datalist.countryListDetails.find(item => item?.id === Number(sulg) && item?.name === name);
    setDetails(list)
    // if(list.length > 0) {
    //   console.log("1111111");
      
    // } else {
    //   console.log("0000000");
    // }
  }, [])
console.log(details);

  return (
    <div>
      <Container>
        {details !== undefined ?
          <Row style={{ justifyContent: 'center' }}>
            <Col lg={8} className="d-flex align-items-stretch mt-2 mb-2">
              <h1 style={{ textAlign: 'center', width: '100%', fontSize: '26px' }}> Details Pages </h1>
            </Col>
            <Col lg={8} className="d-flex align-items-stretch mb-4">
              <div className='card _box__area'>
                <h3> Capital: <span> {details?.capital}  </span> </h3>
                <h3> Population: <span> {details?.population}  </span> </h3>
                <h3> Currency: <span> {details?.currency}  </span> </h3>
                <h3> isocode: <span> {details?.isocode}  </span> </h3>
                <p> description: <span> {details?.description}  </span> </p>
              </div>
            </Col>
          </Row> : <>
            <Row style={{ justifyContent: 'center' }}>
              <Col lg={8} style={{ textAlign: 'center', width: '100%', marginTop: "15px"}}>
                <h3> Data Not found </h3>
                <button onClick={() => navigate(-1)}>Go forward</button>
              </Col>
            </Row>
          </>}
      </Container>
    </div>
  )
}

export default CountryListDetails