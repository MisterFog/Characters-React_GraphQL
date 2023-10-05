import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Box } from '@mui/material';

export type FilterCharacter = {
  name: string;
  status: string;
  species: string;
  gender: string;
};

interface FilterFormProps {
  onSubmit: (data: FilterCharacter) => void;
  initialValues: FilterCharacter;
}

const FilterBlock: React.FC<FilterFormProps> = ({ onSubmit, initialValues }) => {
  const { control, handleSubmit } = useForm<FilterCharacter>();

  const handleFilterSubmit = (data: FilterCharacter) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFilterSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
          <Controller
            name="name"
            control={control}
            defaultValue={initialValues.name}
            render={({ field }) => <TextField {...field} label="Name" fullWidth />}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Controller
            name="status"
            control={control}
            defaultValue={initialValues.status}
            render={({ field }) => <TextField {...field} label="Status" fullWidth />}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Controller
            name="species"
            control={control}
            defaultValue={initialValues.species}
            render={({ field }) => <TextField {...field} label="Species" fullWidth />}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Controller
            name="gender"
            control={control}
            defaultValue={initialValues.gender}
            render={({ field }) => <TextField {...field} label="Gender" fullWidth />}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end" marginTop="1rem">
        <button className="btn-flip" data-back="Search" data-front="Search" type="submit" />
      </Box>
    </form>
  );
};

export default FilterBlock;
