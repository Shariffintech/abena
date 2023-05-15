import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "bulma/css/bulma.min.css";
import { Form, Button } from "react-bulma-components";
import { addStrategy } from "./strategySlice";
export function joinBetaForm() {
  const {} = useForm();

  const { Label, Control, Input, Select, Textarea } = {
    ...Form,
  };
  const dispatch = useDispatch();

  // to do: move strategy to "in review" status for each submitted strategy once the strategy is submitted

  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [industryExp, setIndustryExp] = useState("");
  const [studentCount, setStudentCount] = useState(0);

  const onBetaUserSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    const betaUserData = {
      email,
      contactName,
      contactNumber,
      organization,
      industryExp,
      studentCount,
    };
    
    dispatch(addBetaUser(betaUserData));
  };

 

  // add in a way to sort by status
  return (
    <div>
      <Form.Field>
        <Label size="medium"> Beta Form</Label>
        <Control>
          <Input
            type="text"
            placeholder="Contact Name"
            id="beta-contact-name"
            value={contactName}
            onChange={(e) => setName(e.target.value)}
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Email</Label>
        <Control>
          <Textarea
            type="text"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setDescription(e.target.value)}
            id="beta-email"
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Contact Number</Label>
        <Control>
          <Input
            type="text"
            placeholder="Please enter your contact number"
            value={contactNumber}
            onChange={(e) => setReference(e.target.value)}
            id="beta-contact-number"
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Organization</Label>
        <Control>
          <Input
            type="text"
            placeholder="Please enter your organization"
            value={organization}
            onChange={(e) => setCategory(e.target.value)}
            id="beta-user-organization"
          />
        </Control>
      </Form.Field>

      <Form.Field>
        <Label size="medium"> Industry Experience</Label>
        <Control>
          <Select
            type="number"
            placeholder="Please enter your industry experience"
            value={industryExp}
            onChange={(e) => setTier(e.target.value)}
            id="beta-industry-exp"
          >
            <option value={"0"}>0</option>
            <option value={"1-3"}>1-3</option>
            <option value={"3-5"}>3-5</option>
            <option value={"5-10"}>5-10</option>
            <option value={"10+"}>10+</option>
          </Select>
        </Control>
      </Form.Field>
      <br />
      <Form.Field>
        <Button color="black" onClick={onBetaUserSubmit}>
          Submit
        </Button>
      </Form.Field>
    </div>
  );
}
