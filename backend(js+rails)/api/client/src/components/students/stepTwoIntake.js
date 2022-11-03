import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";
import {
  Form,
  Button,
  Card,
  Columns,
  Media,
  Image,
  Field,
} from "react-bulma-components";

function StepTwoIntake() {
  const { Label, Control, Input, Select, Checkbox } = { ...Form };
  const dispatch = useDispatch();

  const [classLocation, setClassLocation] = useState("");
  const [currentSchool, setCurrentSchool] = useState("");
  const [studentSchedule, setStudentSchedule] = useState("");
  const [dualDiagnosis, setDualDiagnosis] = useState("");
  const [autismLevel, setAutismLevel] = useState("");
  const [reqSupport, setReqSupport] = useState("");
  const [safetyRisk, setSafetyRisk] = useState("");
  const [consentStatus, setConsentStatus] = useState("");
  const [teamSchedule, setTeamSchedule] = useState("");
  const [tier, setTier] = useState("");
  const [nessesaryNextSteps, setNessesaryNextSteps] = useState("");
  const { register, handleSubmit } = useForm();
  const { onChange, onBlur } = register("Student Name");
  const onSubmit = (data) => console.log(data);

  return (
   
      <Columns multiline style={{  background: "#37C6F7", width: "100%"}}>
        <Columns.Column size={6}>
          <form
            className="simpleform mt-6 pt-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Field>
              <h3>
                <strong>Student Name </strong>
              </h3>
              <Control>
                <Input
                  type="text"
                  placeholder="Please enter Student Name"
                  // value={props.name}
                />
              </Control>
            </Form.Field>

            <Form.Field>
              <Label>
                <Control>
                  <Button color="black">
                    <Checkbox
                      name="is_active"
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      Add Developmental Screening
                    </Checkbox>
                  </Button>
                </Control>
              </Label>
            </Form.Field>

            <Form.Field className="pb-5">
              <br />
              <Button
                color="primary"
                type="submit"
                size="medium"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Form.Field>
          </form>
        </Columns.Column>

        <Columns.Column size={5} className="mt-6 pt-6 is-fixed-top">
          <Card style={{ margin: "auto", borderRadius: "2rem" }}>
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image
                    size={64}
                    alt="64x64"
                    borderRadius={64}
                    src="http://bulma.io/images/placeholders/128x128.png"
                  />
                </Media.Item>
              </Media>

              <h3>
                <strong>Primary Teacher Name </strong>
              </h3>

              <Input
                name="primary_teacher_name"
                placeholder="Primary Teacher Name"
                readOnly={true}
              />

              <h3>
                <strong>Classroom Location</strong>
              </h3>
              <Input
                name="classroom_location"
                placeholder="Classroom Location"
                readOnly={true}
              />
            </Card.Content>
          </Card>
        </Columns.Column>
      </Columns>

  );
}

export default StepTwoIntake;
