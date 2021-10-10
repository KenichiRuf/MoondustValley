import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const Login = () => {
    return(
        <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input name="username"/>
            </FormGroup>
        </Form>
    )
}

export default Login