import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row} from 'reactstrap'
import {useNavigate} from 'react-router-dom'

function EditMapel(props) {
    const [mapel, setMapel] = useState({id: '', nama: ''})
    const apiURL = "http://localhost:8000/mapel/show/"
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        const GetDataById = async () => {
            const result = await axios.get(apiURL + id)
            setMapel({
                nama: result.data.nama
            })
            console.log("setMapel: ", result.data);
        }
        GetDataById()
    }, [])

    const updateMapel = (e) => {
        e.preventDefault()
        const data = {nama: mapel.nama}
        axios.put('http://localhost:8000/mapel/edit/' + id, data)
        .then((result)=> {
            navigate('/MapelList')
        })
    }
    const onChange = (e) => {
        e.persist()
        setMapel({...mapel, [e.target.name]: e.target.value})
    }
    return(
        <div className='flex-row align-items-center'>
            <Container>
               <Row className='justify-content-center'>
                   <Col>
                        <Card className='mx-4'>
                            <CardBody className='p-4'>
                                <Form onSubmit={updateMapel}>
                                    <h1>Edit Data</h1>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' name="nama" id="nama" placeholder='nama' value={mapel.nama} onChange={onChange}/>
                                    </InputGroup>
                                    <CardFooter className='p-4'>
                                        <Row>
                                            <Col>
                                                <Button type="submit" className='btn btn-info mb-1' block>Save</Button>
                                            </Col>
                                            <Col>
                                                <Button className='btn btn-info mb-1' block>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
               </Row>
            </Container>
        </div>
    )
}

export default EditMapel