import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
// import { LoginUser } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
// import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

const ProfileForm = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState();


    //   const {isLoading} = useSelector((state) => state.auth);

    const LoginSchema = Yup.object().shape({
        name: Yup.string().required("name is required"),
        about: Yup.string().required("about is required"),
        avatarUrl: Yup.string().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
        name: "example@gmail.com",
        about: "talk your out out ur mind loudly",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setError,
        setValue,
        handleSubmit,
        formState: { errors },
    } = methods;

    const values = watch();

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            setFile(file);

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("avatarUrl", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    const onSubmit = async (data) => {
        try {
            console.log(data);

        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };



    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}

                <RHFTextField
                    helperText={"This name is visible to ur condacts"}
                    name="firstName"
                    label="First Name"
                />

                <RHFTextField multiline rows={4} name="about" label="About" />
                <Stack direction={"row"} justifyContent="end">
                    <Button
                        color="primary"
                        size="large"
                        type="submit"
                        variant="contained"
                    // loading={isSubmitSuccessful || isSubmitting}
                    >
                        Save
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;