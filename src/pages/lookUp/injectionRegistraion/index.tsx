import { Box, Button, Container, Grid, makeStyles, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface FormInputs {
    fullName: string;
    birthday: Date;
    gender: 'male' | 'female';
    phone: string;
    email: string;
    idCard: string;
    healthInsuranceCard: string;
    job: string;
    workUnit: string;
    currentAddress: string;
    province: string;
    district: string;
    ward: string;
    ethnic: string;
    guardianRelationship: 'mom' | 'father' | 'guardian';
    guardianPhoneNumber: string;
    dateOfInjectRegistration: Date;
    partOfInjectionDay: 'morning' | 'noon' | 'night';
}

const Form = () => {
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Họ Tên là bắt buộc'),
        birthday: Yup.date()
            .typeError('Ngày Sinh là bắt buộc')
            .default(() => new Date()),
        gender: Yup.string().required('Vui lòng chọn giới tính'),
        email: Yup.string()
            .required('Email là bắt buộc')
            .email('Email không hợp lệ'),
        idCard: Yup.string()
            .required('CCCD/Mã định danh công dân là bắt buộc')
            .matches(/^(\d{9}|\d{12})$/, 'CMND chỉ chứa 9 hoặc 12 số'),
        healthInsuranceCard: Yup.string()
            .required('Số thẻ BHYT là bắt buộc')
            .matches(/^(\d{9}|\d{12})$/, 'Số thẻ BHYT chỉ chứa 9 hoặc 12 số'),


    });
    const {
        handleSubmit,
        control,
        formState: { isValid }
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        defaultValues: {
            idCard: '',
            email: '',
            fullName: '',
            gender: 'female'
        }
    });


    const steps = ['Thông tin cá nhân', 'Phiếu đồng ý tiêm', 'Hoàn thành'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, fontWeight: 'bold', fontSize: '1rem' }}>1. Thông tin người đăng ký tiêm</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography fontWeight="400" mb="0.5rem">
                                Họ và tên
                                <Box component="span" color="#f46a6a"> (*)</Box>
                            </Typography>
                            <TextField
                                fullWidth
                                label="Họ và tên"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={3}>

                        </Grid>
                        <Grid item xs={3}>
                            1
                        </Grid>
                        <Grid item xs={3}>
                            1
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );

}

const InjectionRegistration = () => {
    return (
        <>
            <Box sx={{ mt: 14, mb: 5, bgcolor: '#efefef' }}>
                <Container sx={{ py: 1 }} maxWidth="xl">
                    <Typography component="h5" variant="h5" fontSize="28px" fontWeight="400">Tra cứu đăng ký tiêm</Typography>
                </Container>
            </Box>
            <Container sx={{ py: 1 }} maxWidth="xl">
                <Form />
            </Container>
        </>
    );
}
export default InjectionRegistration;