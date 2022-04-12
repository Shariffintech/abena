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

function StepOneIntake() {
  const { Label, Control, Input, Select, Checkbox } = { ...Form };
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState("");
  const [sleepingPatterns, setSleepingPatterns] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [concernType, setConcernType] = useState("");
  const [team, setTeam] = useState("");
  const [fundingSource, setFundingSource] = useState("");
  const [priorSchool, setPriorSchool] = useState("");
  const [devScreeningStatus, setDevScreeningStatus] = useState("");
  const [enrollmentStatus, setEnrollmentStatus] = useState("");
  const [natureOfConcern, setNatureOfConcern] = useState("");
  const [concernStatus, setConcernStatus] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [individualServiceType, setIndividualServiceType] = useState("");
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState("");

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

  const {Textarea} = {
    ...Form,
  };
  const { register, handleSubmit } = useForm();
  const { onChange, onBlur } = register("Student Name");
  const onSubmit = (data) => console.log(data);

  return (
    <Columns multiline style={{ background: "#37C6F7", width: "100%" }}>
      <Columns.Column size={6}>
        <form
          className="simpleform"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 pt-6"
        >
          <Form.Field>
            <h3>
              <strong>Student Name </strong>
            </h3>
            <Control>
              <Input
                type="text"
                placeholder="Please enter Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Developmental Screening Status</strong>
            </h3>
            <Control>
              <Select
                type="text"
                placeholder="Developmental Screening Status"
                value={devScreeningStatus}
                onChange={(e) => setDevScreeningStatus(e.target.value)}
              >
                <option value="">Select Developmental Screening Status</option>
                <option value="Screened">Screened</option>
                <option value="Not Screened">Not Screened</option>
              </Select>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Developmental Screening Completed</strong>
            </h3>
            <Control>
              <Select
                name="developmental_screening_completed"
                defaultValue="Please Select"
                onChange={(e) => setDevScreeningStatus(e.target.value)}
                onBlur={onBlur}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Select>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Student Date of Birth</strong>
            </h3>
            <Control>
              <Input
                type="date"
                name="date_of_birth"
                onChange={(e) => setDateOfBirth(e.target.value)}
                onBlur={onBlur}
                value={dateOfBirth}
              />
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Concern Type</strong>
            </h3>
            <Control>
              <Select
                name="concern_type"
                defaultValue="Select"
                onChange={(e) => setConcernType(e.target.value)}
                value={concernType}
                onBlur={onBlur}
              >
                <option value="Pending">Pending</option>
                <option value="Academic">Academic</option>
                <option value="Behavioral">Behavioral</option>
                <option value="Social">Social</option>
                <option value="Emotional">Developmental</option>
                <option value="Attendance">Attendance</option>
              </Select>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong> Nature of Concern</strong>
            </h3>
            <Control>
              <Select
                name="nature_of_concern"
                defaultValue="Select"
                onChange={(e) => setNatureOfConcern(e.target.value)}
                value={natureOfConcern}
              >
                <option value="">Please select concern</option>
                <option value="Physical Aggression">Physical Aggression</option>
                <option value="Verbal Aggression">Verbal Aggression</option>
                <option value="Self Injury">Self Injury</option>
                <option value="Injury Towards Others">
                  Injury Towards Others
                </option>
                <option value="Hiding/Dropping to the Floor or Elopement/Running Away">
                  Hiding/Dropping to the Floor or Elopement/Running Away
                </option>
                <option value="Biting">Biting</option>
                <option value="Temper Tantrums">Temper Tantrums</option>
                <option value="Property Damage">Property Damage</option>
                <option value="Defiance">Defiance</option>
                <option value="Excessive Crying">Excessive Crying</option>
                <option value="Whining">Whining</option>
                <option value="Defiance/Refusal to listen or respond to directions">
                  Defiance/Refusal to listen or respond to directions
                </option>
                <option value="Screaming/Yelling">Screaming/Yelling</option>
                <option value="Bullying/Coercion">Bullying/Coercion</option>
                <option value="Shyness/Withdrawn">Shyness/Withdrawn</option>
                <option value="Spitting">Spitting</option>
                <option value="Select One">Select One</option>
                <option value="Physical Aggression">Physical Aggression</option>
                <option value="Verbal Aggression">Verbal Aggression</option>
                <option value="Self Injury">Self Injury</option>
                <option value="Injury Towards Others">
                  Injury Towards Others
                </option>
                <option value="Hiding/Dropping to the Floor or Elopement/Running Away">
                  Hiding/Dropping to the Floor or Elopement/Running Away
                </option>
                <option value="Biting">Biting</option>
                <option value="Temper Tantrums">Temper Tantrums</option>
                <option value="Property Damage">Property Damage</option>
                <option value="Defiance">Defiance</option>
                <option value="Excessive Crying">Excessive Crying</option>
                <option value="Whining">Whining</option>
                <option value="Defiance/Refusal to listen or respond to directions">
                  Defiance/Refusal to listen or respond to directions
                </option>
                <option value="Screaming/Yelling">Screaming/Yelling</option>
                <option value="Bullying/Coercion">Bullying/Coercion</option>
                <option value="Shyness/Withdrawn">Shyness/Withdrawn</option>
                <option value="Spitting">Spitting</option>
                <option value="Other">Other</option>
              </Select>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>New or Existing Concern?</strong>
            </h3>
            <Control>
              <Select
                name="new_or_existing_concern"
                defaultValue="Select"
                value={concernStatus}
                onChange={(e) => setConcernStatus(e.target.value)}
                onBlur={onBlur}
              >
                <option value="">Please select concern</option>
                <option value="New">New</option>
                <option value="Existing">Existing</option>
              </Select>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong> Team </strong>
            </h3>
            <Control>
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Mom
              </Checkbox>{" "}
              <br />
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Dad
              </Checkbox>
              <br />
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Grandma
              </Checkbox>
              <br />
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Granpa
              </Checkbox>
              <br />
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Aunt
              </Checkbox>
              <br />
              <Checkbox value={team} onChange={(e) => setTeam(e.target.value)}>
                Uncle
              </Checkbox>
            </Control>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Funding Source (if applicable)</strong>
            </h3>
            <Select
              type="text"
              placeholder="Please Select Funding Source"
              value={fundingSource}
              onChange={(e) => setFundingSource(e.target.value)}
            >
              <option>Select Funding Source</option>
              <option>Type 1 / Non-Program </option>
              <option>Philly Prek</option>
              <option>PreK Counts</option>
              <option>SD-HS</option>
              <option>EHS-Cotraic</option>
              <option>CCIS/Non-Program</option>
              <option>Private Pay</option>
              <option>School Age-Before Care and After Care</option>
              <option>School Age BSA-Virtual Before Care/After Care</option>
              <option>Summer Camp</option>
            </Select>
          </Form.Field>
          <Form.Field>
            <h3>
              <strong> Sleeping Patterns</strong>
            </h3>
            <Select
              type="text"
              placeholder="Sleeping Patterns"
              value={sleepingPatterns}
              onChange={(e) => setSleepingPatterns(e.target.value)}
            >
              <option>Select Sleeping Patterns</option>
              <option> 1 - Takes naps </option>
              <option> 2 - Takes naps somewhat often</option>
              <option> 3 - Takes naps frequently</option>
              <option> 4 - Doesn't take naps</option>
            </Select>
          </Form.Field>
          <Form.Field>
            <h3>
              <strong> Prior School Attended</strong>
            </h3>
            <Textarea type="text" placeholder="Prior School" value={priorSchool}
            onChange={(e) => setPriorSchool(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <h3>
              <strong> Enrollment Status</strong>
            </h3>
            <Select
              type="text"
              placeholder="Enrollment Status"
              value={enrollmentStatus}
              onChange={(e) => setEnrollmentStatus(e.target.value)}
            >
              <option>Select Enrollment Status</option>
              <option> Part-Time </option>
              <option> Full-Time </option>
            </Select>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong> Type of Service</strong>
            </h3>
            <Select
              type="text"
              placeholder="Service Type"
              defaultValue="Select"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option>Select Service Type</option>
              <option> IEP </option>
              <option> IFSP </option>
              <option> BTP </option>
              <option> IEP / BTP </option>
              <option> None </option>
            </Select>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Individual Service Type</strong>
            </h3>
            <Select
              type="text"
              placeholder="Individual Service Type"
              defaultValue="Select"
              value={individualServiceType}
              onChange={(e) => setIndividualServiceType(e.target.value)}
            >
              <option>Select Individual Service Type</option>
              <option> SI </option>
              <option> OT </option>
              <option> PT </option>
              <option> SLP </option>
              <option> BSC </option>
            </Select>
          </Form.Field>

          <Form.Field>
            <h3>
              <strong>Primary Diagnosis</strong>
            </h3>
            <Select
              type="text"
              placeholder="Primary Diagnosis"
              defaultValue="Select"
              value={primaryDiagnosis}
              onChange={(e) => setPrimaryDiagnosis(e.target.value)}
            >
              <option>Select Primary Diagnosis</option>
              <option>None</option>
              <option>Environmental Stressor</option>
              <option>Autism</option>
              <option>ODD</option>
              <option>Anxiety Disorder</option>
              <option>Depression/Mood Disorder</option>
              <option>Lead Poisoning</option>
              <option>Failure to Thrive</option>
              <option>Bipolar Disorder</option>
              <option>Substance Abuse Disorder</option>
              <option>Reactive Attachment Disorder</option>
              <option>Disruptive Behavior Disorder</option>
              <option>Elimination Disorder</option>
              <option>PTSD</option>
              <option>Tic Disorder</option>
              <option>Affective Mood Disorder</option>
              <option>Eating Disorder</option>
              <option>ADHD</option>
              <option>ADD</option>
              <option>Schizophrenia</option>
              <option>Speech and Language Delay</option>
              <option>Cognitive Delay</option>
              <option>Fine/Gross Motor Delay</option>
              <option>Adaptive/Self-Help Delay</option>
              <option>Social Emotional Delay</option>
            </Select>
          </Form.Field>

          <Form.Field>
            <Label>
              <Control>
                <Button color="black">
                  <Checkbox
                    name="is_active"
                    onChange={(e) => setIsActive(e.target.value)}
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

export default StepOneIntake;
