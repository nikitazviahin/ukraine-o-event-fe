import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { HttpStatusCode } from "axios";
import { Controller, SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

import {
  CreateCompetitionInput,
  useCreateCompetitionValidation,
} from "../../validationHooks/useCreateCompetitionValidation";
import { CustomAlert } from "../CustomAlert";
import { CompetitionServiceInstance } from "../../api/competition.api";
import { EClass } from "../../types/enums/class.enum";
import { jwtTokenConst } from "../../constants/localStorage";
import { SelectClass } from "./SelectClass";
import { parseISOString } from "../../helpers/parseISOString";

const competitonNameLabelText = "Name of the competition";
const competitionDescriptionLabelText = "Description of the competition";
const dateOfCompetitionLabelText = "Date of competition";
const competitionPlaceText = "Place of the competition";
const createCompetitionText = "Create competition";
const competitionCreatedSuccessfullyText = "Competition created";

export const CreateCompetitionForm = () => {
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();
  const [classes, setClasses] = useState<EClass[]>([]);

  const token = localStorage.getItem(jwtTokenConst);

  const {
    control,
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useCreateCompetitionValidation();

  const onSubmitHandler: SubmitHandler<CreateCompetitionInput> = async (
    values
  ) => {
    setErrorAlertOpen(false);
    setSuccessAlertOpen(false);

    try {
      const dateofCompetitionValueISO = parseISOString(values.competitionDate);

      const res = await CompetitionServiceInstance.createCompetition(
        {
          ...values,
          classes,
          competitionDate: dateofCompetitionValueISO,
        },
        token
      );

      if (res.status === HttpStatusCode.Created) {
        setSuccessAlertOpen(true);
      }

      setClasses([]);
      reset();
    } catch (error: any) {
      setErrorAlertOpen(() => true);
      setErrorAlertText(() => error.message);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"30rem"}
      alignItems={"center"}
      margin="auto"
      marginTop={"1rem"}
      padding={"1rem"}
      borderRadius={3}
      boxShadow={"2px 2px 5px #ccc"}
      component={"form"}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        autoComplete={"text"}
        type="text"
        label={competitonNameLabelText}
        sx={{ width: "20rem" }}
        error={!!errors["name"]}
        helperText={errors["name"] ? errors["name"].message : ""}
        {...register("name")}
      />

      <TextField
        id="description"
        type="text"
        label={competitionDescriptionLabelText}
        sx={{ width: "20rem" }}
        multiline
        rows={5}
        error={!!errors["description"]}
        helperText={errors["description"] ? errors["description"].message : ""}
        {...register("description")}
      />

      <Controller
        control={control}
        name={"competitionDate"}
        render={({ field }) => {
          return (
            <DatePicker
              format="DD.MM.YYYY"
              label={dateOfCompetitionLabelText}
              onChange={(date) => {
                field.onChange(date);
              }}
              sx={{ width: "20rem" }}
              disableFuture
              slotProps={{
                field: {
                  readOnly: true,
                },
                textField: {
                  error: !!errors["competitionDate"],
                  helperText: errors["competitionDate"]
                    ? errors["competitionDate"].message
                    : "",
                  value: getValues().competitionDate,
                },
              }}
            />
          );
        }}
      />

      <TextField
        type="text"
        label={competitionPlaceText}
        sx={{ width: "20rem" }}
        error={!!errors["place"]}
        helperText={errors["place"] ? errors["place"].message : ""}
        {...register("place")}
      />

      <SelectClass selectedClasses={classes} setSelectedClasses={setClasses} />

      <LoadingButton type="submit">{createCompetitionText}</LoadingButton>

      <CustomAlert
        inProp={successAlertOpen}
        severityProp={"success"}
        onClickProp={() => setSuccessAlertOpen(false)}
        alertTextProp={competitionCreatedSuccessfullyText}
      />

      <CustomAlert
        inProp={errorAlertOpen}
        severityProp={"error"}
        onClickProp={() => setErrorAlertOpen(false)}
        alertTextProp={errorAlertText}
      />
    </Box>
  );
};
