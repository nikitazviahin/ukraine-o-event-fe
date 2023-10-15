import { useState } from "react";
import { t } from "i18next";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { HttpStatusCode } from "axios";
import { Controller, SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

import {
  CreateCompetitionInput,
  useCreateCompetitionValidation,
} from "../../validationHooks/useCreateCompetitionValidation";
import { CompetitionServiceInstance } from "../../api/competition.api";
import { EClass } from "../../types/enums/class.enum";
import { SelectClass } from "./SelectClass";
import { parseISOString } from "../../helpers/parseISOString";
import { CustomAlert } from "../alerts/CustomAlert";
import { createCompetitionTextFieldStyle } from "../../styles/createCompetition.style";

export const CreateCompetitionForm = () => {
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();
  const [classes, setClasses] = useState<EClass[]>([EClass.M21, EClass.W21]);

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

      const res = await CompetitionServiceInstance.createCompetition({
        ...values,
        classes,
        competitionDate: dateofCompetitionValueISO,
      });

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
      margin={"auto"}
      marginTop={"1rem"}
      padding={"1rem"}
      borderRadius={3}
      boxShadow={"2px 2px 5px #ccc"}
      component={"form"}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        autoComplete={"text"}
        type={"text"}
        label={t(`competition.competitonNameLabel`)}
        sx={createCompetitionTextFieldStyle}
        error={!!errors["name"]}
        helperText={errors["name"] ? errors["name"].message : ""}
        {...register("name")}
      />

      <TextField
        id={"description"}
        type={"text"}
        label={t(`competition.competitionDescriptionLabelText`)}
        sx={createCompetitionTextFieldStyle}
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
              format={"DD.MM.YYYY"}
              label={t(`competition.dateOfCompetitionLabelText`)}
              onChange={field.onChange}
              sx={createCompetitionTextFieldStyle}
              slotProps={{
                field: {
                  readOnly: true,
                },
                textField: {
                  error: !!errors["competitionDate"],
                  helperText: errors["competitionDate"]
                    ? t(`global.invalidDate`)
                    : "",
                  value: getValues().competitionDate,
                },
              }}
            />
          );
        }}
      />

      <TextField
        type={"text"}
        label={t(`competition.competitionPlaceText`)}
        sx={createCompetitionTextFieldStyle}
        error={!!errors["place"]}
        helperText={errors["place"] ? errors["place"].message : ""}
        {...register("place")}
      />

      <SelectClass selectedClasses={classes} setSelectedClasses={setClasses} />

      <LoadingButton variant={"contained"} type={"submit"}>
        <Typography variant={"button"}>
          {t(`competition.createCompetitionText`)}
        </Typography>
      </LoadingButton>

      <CustomAlert
        inProp={successAlertOpen}
        severityProp={"success"}
        onClickProp={() => setSuccessAlertOpen(false)}
        alertTextProp={t(`competition.competitionCreatedSuccessfullyText`)}
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
