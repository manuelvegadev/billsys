import {
  Column,
  Grid,
  Layer,
  NumberInput,
  Stack,
  TextInput,
} from "@carbon/react";
import { useId, useState } from "react";
import {
  BillingSummaryTile,
  DateInput,
  MDEditor,
  ModalForm,
} from "../../components";
import { getCurrentDateString, getCurrentTimeStamp } from "../../utils";

/** @returns {InvoiceItemFormProps} */
export const getInvoiceItemFormDefaultProps = () => ({
  item: {
    id: "new_" + getCurrentTimeStamp().toString(),
    end_date: getCurrentDateString(),
    task: "",
    description: `Important *things*

This is a small description of the task:  

- Sub-task 1
    - Sub-sub-task 1
- Sub-task 2
- Refactor task

> A small solved problem`,
    unit_value: 800000,
    quantity: 1,
    discount: 0,
  },
});

/** @type {InvoiceItemFormType} */
export const InvoiceItemForm = ({
  item = getInvoiceItemFormDefaultProps().item,
  onSuccess,
}) => {
  /* TODO: Prevent to save changues when is edit 
      mode and the form has no changes */

  const prefixId = useId();

  const [endDateValue, setEndDateValue] = useState(item.end_date);
  const [taskValue, setTaskValue] = useState(item.task);
  const [descriptionValue, setDescriptionValue] = useState(item.description);
  const [unitValueValue, setUnitValueValue] = useState(item.unit_value);
  const [discountValue, setDiscountValue] = useState(item.discount);
  const [quantityValue, setQuantityValue] = useState(item.quantity);

  const isNew = item.id.startsWith("new_");

  return (
    <ModalForm
      primaryButtonText={isNew ? "Add item" : "Save changes"}
      secondaryButtonText={"Cancel"}
      onSubmit={() =>
        new Promise((resolve) => {
          setTimeout(resolve, 1000);
        })
      }
      successMessage={"Added successfully!"}
      onSuccess={() => {
        if (onSuccess) {
          onSuccess({
            id: item.id,
            end_date: endDateValue,
            task: taskValue,
            description: descriptionValue,
            unit_value: unitValueValue,
            discount: discountValue,
            quantity: quantityValue,
          });
          /* TODO: Prevent to call twice */
          onSuccess = null;
        }
      }}
    >
      {() => {
        return (
          <Stack gap={5}>
            <DateInput
              id={prefixId + "date"}
              label={"Task"}
              value={endDateValue}
              onChange={(value) => setEndDateValue(value)}
            />
            <TextInput
              id={prefixId + "task"}
              labelText={"Task"}
              required
              defaultValue={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              placeholder={"e.g. Page header"}
            />
            <div>
              <span className={"cds--label"}>Description</span>
              <MDEditor
                initialValue={descriptionValue}
                onChange={(value) => setDescriptionValue(value)}
              />
            </div>
            <Grid
              condensed
              fullWidth
              style={{
                gap: "1rem",
                padding: "0",
              }}
            >
              <Column sm={4} md={8}>
                <NumberInput
                  hideSteppers
                  id={prefixId + "unit_value"}
                  label={"Cost"}
                  defaultValue={unitValueValue}
                  onChange={(e) => setUnitValueValue(Number(e.target.value))}
                  min={0}
                  step={0.01}
                  inputMode={"decimal"}
                  required
                />
              </Column>
              <Column sm={2} md={4}>
                <NumberInput
                  hideSteppers
                  id={prefixId + "quantity"}
                  label={"Quantity"}
                  defaultValue={quantityValue}
                  min={1}
                  step={1}
                  onChange={(e) => setQuantityValue(Number(e.target.value))}
                  inputMode={"numeric"}
                  required
                />
              </Column>
              <Column sm={2} md={4}>
                <NumberInput
                  hideSteppers
                  id={prefixId + "discount"}
                  label={"Discount"}
                  helperText={"Per unit"}
                  min={0}
                  defaultValue={discountValue}
                  step={0.01}
                  onChange={(e) => setDiscountValue(Number(e.target.value))}
                  inputMode={"decimal"}
                  required
                />
              </Column>
            </Grid>
            <Layer>
              <span className={"cds--label"}>Summary</span>
              <BillingSummaryTile
                item={taskValue}
                unitValue={unitValueValue}
                quantity={quantityValue}
                discount={discountValue}
              />
            </Layer>
          </Stack>
        );
      }}
    </ModalForm>
  );
};

export default InvoiceItemForm;
