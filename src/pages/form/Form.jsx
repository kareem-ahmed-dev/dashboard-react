import React from "react";
import { Alert, Box, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const currencies = [
  {
    value: "Admin",
    label: "Admin"
  },
  {
    value: "Manager",
    label: "Manager"
  },
  {
    value: "User",
    label: "User"
  }
];
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <Stack direction="row" spacing={3}>
        <TextField
          error={errors.firstName}
          helperText={errors.firstName ? "This field is required" : null}
          {...register("firstName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={errors.lastName}
          helperText={errors.lastName ? "This field is required" : null}
          {...register("lastName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={errors.mail}
        helperText={errors.mail ? errors.mail.message : null}
        {...register("mail", {
          required: "Email Address is required",
          pattern: {
            value: regEmail,
            message: "Please enter a valid email address"
          }
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={errors.phone}
        helperText={errors.phone ? errors.phone.message : null}
        {...register("phone", {
          required: "Phone Number is required",
          pattern: {
            value: regPhone,
            message: "Please enter a valid phone number"
          },
          minLength: {
            value: 5,
            message: "Phone number must be at least 5 digits"
          }
        })}
        label="Phone"
        variant="filled"
      />
      <TextField  {...register("address 1")} label="Address 1" variant="filled" />
      <TextField  {...register("address 2")} label="Address 2" variant="filled" />
      <TextField
      {...register("Role")}
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "fit-content",
          textTransform: "capitalize",
          marginLeft: "auto"
        }}
      >
        Create New User
      </Button>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
