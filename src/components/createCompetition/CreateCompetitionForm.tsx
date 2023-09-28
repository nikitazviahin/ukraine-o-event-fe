import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { HttpStatusCode } from "axios";
import { SubmitHandler } from "react-hook-form";
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
  const [dateOfCompetitionValue, setDateOfCompetitionValue] = useState<
    Dayjs | Date | null
  >(null);

  const token = localStorage.getItem(jwtTokenConst);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useCreateCompetitionValidation();

  const onSubmitHandler: SubmitHandler<CreateCompetitionInput> = async (
    values
  ) => {
    setErrorAlertOpen(false);
    setSuccessAlertOpen(false);

    try {
      const dateofCompetitionValueISO = dayjs(
        dateOfCompetitionValue
      ).toISOString();
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

      setDateOfCompetitionValue(null);
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

      <DatePicker
        format="DD.MM.YYYY"
        label={dateOfCompetitionLabelText}
        sx={{ width: "20rem" }}
        value={dateOfCompetitionValue}
        onChange={(newValue) => setDateOfCompetitionValue(newValue)}
        slotProps={{
          field: {
            readOnly: true,
          },
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
