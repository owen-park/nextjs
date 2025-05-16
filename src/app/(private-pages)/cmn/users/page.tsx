import { Grid, TextField } from "@mui/material";

export default function Users() {
  return (
    <div className="w-full m-auto p-2.5">
      <div className="text-2xl font-bold mb-1">Users</div>
      <Grid container spacing={2}>
        <Grid size={3}>
          <TextField className="w-full" id="loginId" label="Login ID" variant="outlined" size="small" />
        </Grid>
        <Grid size={3}>
          <TextField className="w-full" id="userName" label="User Name" variant="outlined" size="small" />
        </Grid>
        <Grid size={3}>
          <TextField className="w-full" id="email" label="Email" variant="outlined" size="small" />
        </Grid>
        <Grid size={3}>
          <TextField className="w-full" id="status" label="Status" variant="outlined" size="small" />
        </Grid>
      </Grid>
    </div>
  );
};
