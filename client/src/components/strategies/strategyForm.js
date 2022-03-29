import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "bulma/css/bulma.min.css";
import { progressCircle } from "../utilityComponents/progressCircle";
import { Form, Button } from "react-bulma-components";
import { addStrategy } from "../strategies/strategySlice"
export function StrategyForm({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { Label, Control, Input, Select, Textarea, Checkbox, Field } = {
    ...Form,
  };
  const dispatch = useDispatch();

  // to do: move strategy to "in review" status for each submitted strategy once the strategy is submitted

  const [name, setName] = useState("");
  const [tier, setTier] = useState("Tier1");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [category, setCategory] = useState("Academic");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  // const canSave =
  //   [name, category, tier, description, strategyId].every(Boolean) &&
  //   addRequestStatus === "idle";

  const onSaveStrategyClick = (e) => {
    console.log("strategyData should show")
    e.preventDefault();
    const strategyData = {
      name,
      tier,
      description,
      reference,
      category,
    };
    
    dispatch(addStrategy(strategyData));
  
  };

  // try {
  //   setAddRequestStatus("pending");
  //   await dispatch(addStrategy({ name, category, tier, description, strategy: strategyId })).unwrap();
  //   setName("");
  //   setCategory("");
  //   setTier("");
  //   setDescription("");
  //   setStrategyId("");
  // } catch (error) {
  //   setAddRequestStatus("failed");
  // } finally {
  //   setAddRequestStatus("idle");
  // }

  // add in a way to sort by status
  return (
    <div>
      <Form.Field>
        <Label size="medium"> Strategy Name</Label>
        <Control>
          <Input
            type="text"
            placeholder="Strategy Name"
            id="strategy-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Description</Label>
        <Control>
          <Textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="strategy-description"
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Reference</Label>
        <Control>
          <Input
            type="text"
            placeholder="Reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            id="strategy-reference"
          />
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Category</Label>
        <Control>
          <Select
            type="number "
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="strategy-category"
          >
            <option value={"Academic"}>Academic</option>
            <option value={"Social"}>Social</option>
            <option value={"Emotional"}>Emotional</option>
            <option value={"Developmental"}>Developmental</option>
          </Select>
        </Control>
      </Form.Field>
      <Form.Field>
        <Label size="medium"> Strategy Tier </Label>
        <Control>
          <Select
            type="number"
            placeholder="Tier"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            id="strategy-tier"
          >
            <option value={"Tier1"}>Tier1</option>
            <option value={"Tier2"}>Tier2</option>
            <option value={"Tier3"}>Tier3</option>
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
        <Button color="primary" onClick={onSaveStrategyClick}>
          Submit
        </Button>
      </Form.Field>
    </div>
  );
}

// {...register("Name", {
//   required:{
//     value: true,
//     message: "Please enter a strategy name"
//     }
//   })}

// register("Tier", {
//   required: {
//     value: true,
//     message: "Please select a tier",
//   },
// });

// register("Description", {
//   required: {
//     value: true,
//     message: "Please enter a description",
//   },
// });

// register("Category", {
//   required: {
//     value: true,
//     message: "Please select a category",
//   },
// });

// register("Reference", {
//   required: {
//     value: true,
//     message: "Please enter a reference",
//   },
// });
