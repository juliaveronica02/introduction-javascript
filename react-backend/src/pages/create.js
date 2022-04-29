import React, { useState } from 'react'
import axios from 'axios'
// reactjs v6 -> push.history diganti menjadi useNavigate -> useHistory v5
import {useNavigate} from 'react-router-dom'
import {Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row} from 'reactstrap'

function CreateMapel(props) {
    const [mapel, setMapel] = useState({nama: ''})
    const apiURL = "http://localhost:8000/mapel/create"
    const navigate = useNavigate()

    const insertMapel = (e) => {
        e.preventDefault()
        const data = {nama: mapel.nama}
        axios.post(apiURL, data)
        .then((result) => {
            console.log(result);
            navigate('/MapelList')
        })
    }

    const onChange = (e) => {
        e.persist()
        setMapel({...mapel, [e.target.name]: e.target.value})
    }

    // UI create.
    return(
        <div className='flex-row align-items-center'>
            <Container>
               <Row className='justify-content-center'>
                   <Col>
                        <Card className='mx-4'>
                            <CardBody className='p-4'>
                                <Form onSubmit={insertMapel}>
                                    <h1>Add Data</h1>
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

export default CreateMapel