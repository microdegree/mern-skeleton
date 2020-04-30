import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddProject = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./corporateDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
            <Card style={{ width: '48rem' }}>

  <Card.Body>
  {props.location.fileNameImage}

<Form onSubmit={handleSubmit(onSubmit)}>

    <Form.Group controlId="addProjectCorporateName">
        <Form.Label>Corporate Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Project name" name="projectCorporateName" ref={register({ required: true, maxLength: 80 })} />
    </Form.Group>

    <Form.Group controlId="addProjectTitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Project name" name="projectTitle" ref={register({ required: true, maxLength: 80 })} />
    </Form.Group>

    <Form.Group controlId="addProjectDescription">
        <Form.Label>Project Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Description" name="projectDescription" ref={register({ required: true, maxLength: 400 })} />
    </Form.Group>

    <Form.Group controlId="addProjectTimeline">
        <Form.Label>Project Timeline</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Timeline" name="projectTimeline" ref={register({ required: true, maxLength: 80 })} />
    </Form.Group>

    <Form.Group controlId="addProjectManager">
        <Form.Label>Manager Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Manager name" name="projectManagerName" ref={register({ required: true, maxLength: 80 })} />
    </Form.Group>

    <Form.Group controlId="addProjectManagerContact">
        <Form.Label>Manager Contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Manager Contact" name="projectManagerContact" ref={register({ required: true, maxLength: 200 })} />
    </Form.Group>

    <Form.Group controlId="addProjectManagerEmail">
        <Form.Label>Manager Email id</Form.Label>
        <Form.Control type="email" placeholder="Enter Project manager email" name="projectManagerEmail" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
    </Form.Group>

    <Form.Group controlId="addProjectCategory">
        <Form.Label>Project Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Category" name="projectCategory" ref={register({ required: true, maxLength: 200 })} />
    </Form.Group>

    <Form.Group controlId="addProjectTechnology">
        <Form.Label>Project Technology</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Tech" name="projectTechnology" ref={register({ required: true, maxLength: 200 })} />
    </Form.Group>

    <Form.Group controlId="addProjectBudget">
        <Form.Label>Budget</Form.Label>
        <Form.Control type="text" placeholder="Enter Project Budget" name="projectBudget" ref={register({ required: true, maxLength: 200 })} />
    </Form.Group>
    <br /> <br /> <br />
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
  </Card.Body>
</Card>
</center>     
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddProject
