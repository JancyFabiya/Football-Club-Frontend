import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import axios from '../../utils/axios';



//..........All Clubs..............


export const getAllClubAction = createAsyncThunk(
    "/club",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                "/club",

            );

            console.log('db data', data);

            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)

//...............Club Details..............


export const getClubDetailsAction = createAsyncThunk(
    "/club/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                `/club/${id}`,

            );


            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)

//..........All Manager..............


export const getAllManagerAction = createAsyncThunk(
    "/manager/:clubName",
    async (clubName, { rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                `/manager/${clubName}`,

            );


            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//...............Manager Details..............


export const getManagerDetailsAction = createAsyncThunk(
    "/manager/detail/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                `/manager/detail/${id}`,

            );


            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//..........All Player..............


export const getAllPlayerAction = createAsyncThunk(
    "/player/:clubName",
    async (clubName, { rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                `/player/${clubName}`,

            );


            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//...............Player Details..............


export const getPlayerDetailsAction = createAsyncThunk(
    "/player/detail/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                `/player/detail/${id}`,

            );


            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//............Slices.................

const userSlices = createSlice({
    name: "user",
    initialState: {
        userAuth: 'view',
    },

    extraReducers: (builder) => {

        //All Clubs
        builder.addCase(getAllClubAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllClubAction.fulfilled, (state, action) => {
            state.loading = false;
            state.allClub = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllClubAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Clubs Details
        builder.addCase(getClubDetailsAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getClubDetailsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.club = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getClubDetailsAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //All Manager
        builder.addCase(getAllManagerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllManagerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.allManager = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllManagerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Manager Details
        builder.addCase(getManagerDetailsAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getManagerDetailsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.manager = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getManagerDetailsAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //All Player
        builder.addCase(getAllPlayerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllPlayerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.allPlayer = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getAllPlayerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Player Details
        builder.addCase(getPlayerDetailsAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getPlayerDetailsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.player = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(getPlayerDetailsAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });
    }
})

export default userSlices.reducer;
