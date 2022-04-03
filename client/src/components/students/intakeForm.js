import React from "react";
import "bulma/css/bulma.min.css";
import { useForm } from "react-hook-form";
// import { progressCircle } from "../utilityComponents/progressCircle";
import { Form, Button } from "react-bulma-components";
// import { useDispatch, useSelector } from "react-redux";

// to do: add chat function with twilio record parent, teacher convo when completing this form

function IntakeForm() {
  const { Label, Control, Input, Select } = { ...Form };

  const { register, handleSubmit } = useForm();
  const { onChange, onBlur, name, ref } = register('Full Name'); 

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form-container">
      <form
        className="simpleform"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 pt-6"
      >
        <Form.Field>
          <Label size="medium"> Full Name</Label>
          <Control>
            <Input
              type="text"
              {...register("Full Name", { required: true, maxLength: 80 })}
            />
          </Control>
        </Form.Field>
        <Form.Field>
          <Label size="medium"> Overall Concern</Label>
          <Control>
            <Select
              size="medium"
              ref={register("Overall Concern", { required: true })}
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
          <Label size="medium"> Funding Stream</Label>
          <Input
            type="text"
            placeholder="Funding Stream"
            ref={register("Funding Stream", { required: true, maxLength: 100 })}
            size="medium"
          />
        </Form.Field>
        <Form.Field>
          <Label size="medium"> Sleeping Patterns</Label>
          <Input
            type="tel"
            placeholder="Sleeping Patterns"
            ref={register("Sleeping Patterns", {
              required: true,
              maxLength: 12,
            })}
            size="medium"
          />
        </Form.Field>
        <Form.Field>
          <Label size="medium"> Prior School</Label>
          <Input
            type="text"
            placeholder="Prior School"
            ref={register("Prior School", {})}
            size="medium"
          />
        </Form.Field>
        <Form.Field>
          <Label size="medium"> Team</Label>
          <Select size="medium" ref={register("Team", { required: true })}>
            <option value="Mom">Mom</option>
            <option value="Dad">Dad</option>
            <option value="Grandma">Grandma</option>
            <option value="Granpa">Granpa</option>
            <option value="Aunt">Aunt</option>
            <option value="Uncle">Uncle</option>
          </Select>
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
    </div>
  );
}

export default IntakeForm;
