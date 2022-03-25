import React from "react";
import { useForm, useDispatch } from "react-hook-form";
import {
  addCategory,
  addReference,
  addStatus,
  addTier,
  addName,
} from "../../store/strategySlice";
import "bulma/css/bulma.min.css";

export default function strategyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaulValues: preLoadedValues,
  });

  const preLoadedValues = {};


  // const [setStrategyPerCategory] = useDispatch(
  //   strategySlice.actions.setStrategyPerCategory
  // );
  // const [setStrategyPerStudent] = useDispatch(
  //   strategySlice.actions.setStrategyPerStudent
  // );
  // const [setStrategyPerReference] = useDispatch(
  //   strategySlice.actions.setStrategyPerReference
  // );
  // const [setStrategyPerStatus] = useDispatch(
  //   strategySlice.actions.setStrategyPerStatus
  // );
  // const [setStrategyPerTier] = useDispatch(
  //   strategySlice.actions.setStrategyPerTier
  // );

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register}
        type="text"
        placeholder="Strategy Name"
        value={addName}
        onChange={handleNewInputChange}
        id="strategy-name"
      />

      <input
        ref={register}
        type="text"
        placeholder="Description"
        {...register({
          validate: (value) => value.length > 0 || "Please enter a description",
        })}
        id="strategy-description"
      />

      <input
        ref={register}
        type="text"
        placeholder="Reference"
        {...register({
          validate: (value) =>
            value.length > 0 || "Please enter a valid reference",
        })}
        id="strategy-reference"
      />

      <input
        ref={register}
        type="number "
        placeholder="Category"
        {...register({
          validate: (value) => value > 0 || "Please enter a valid category",
        })}
        id="strategy-category"
      />

      <input
        ref={register}
        type="number"
        placeholder="Tier"
        {...register({
          validate: (value) => value > 0 || "Please enter a tier",
        })}
        id="strategy-tier"
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
