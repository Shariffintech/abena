import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "bulma/css/bulma.min.css";
import { progressCircle } from "../utilityComponents/progressCircle";
import { Form, Button } from "react-bulma-components";

import { addStrategy } from "./strategySlice";

export function StrategyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { Label, Control, Input, Select, Textarea, Checkbox, Field } = {
    ...Form,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addStrategy());
  }, [dispatch]);

  // move strategy to "in review" status for each submitted strategy once the strategy is submitted

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewInput({ ...newInput, [name]: value });
  };

  // add in a way to sort by status
  return (
    <form className="simpleform" onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <Label size="medium"> Strategy Name</Label>
        <Control>
          <Input
            type="text"
            placeholder="Strategy Name"
            id="strategy-name"
            {...register("Name", {
              required: "Required",
            })}
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Description</Label>
        <Control>
          <Textarea
            type="text"
            placeholder="Description"
            id="strategy-description"
            {...register("Description", {
              required: "Required",
            })}
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Reference</Label>
        <Control>
          <Input
            type="text"
            placeholder="Reference"
            id="strategy-reference"
            {...register("Reference", {
              required: "Required",
            })}
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Category</Label>
        <Control>
          <Select
            type="number "
            placeholder="Category"
            id="strategy-category"
            {...register("Category", {
              required: "Required",
            })}
          >
            <option value="1">Academic</option>
            <option value="2">Social</option>
            <option value="3">Emotional</option>
            <option value="4">Developmental</option>
          </Select>
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Tier </Label>
        <Control>
          <Select
            type="number"
            placeholder="Tier"
            id="strategy-tier"
            {...register("Tier", {
              required: "Required",
            })}
          >
            <option>Tier 1</option>
            <option>Tier 2</option>
            <option>Tier 3</option>
          </Select>
        </Control>

        {/* <Field>
          <Control
            type="number"
            placeholder="Tier"
            id="strategy-tier"
            {...register("Tier", {
              required: "Required",
            })}
          >
            <Checkbox>Tier 1 </Checkbox>
            <br />
            <Checkbox>Tier 2 </Checkbox>
            <br />
            <Checkbox>Tier 3 </Checkbox>
          </Control>
        </Field> */}
      </Form.Field>
      <br />
      <Form.Field>
        <Button color="success" type="submit">
          Submit
        </Button>
      </Form.Field>
    </form>
  );
}
