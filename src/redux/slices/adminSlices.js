import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import axios from '../../utils/axios';







//......Registration...........


export const registerAction = createAsyncThunk(
    "/register",
    async (regData, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/register",
                regData,
                config
            );

            if (data && data.user) {
                localStorage.setItem("admin", JSON.stringify(data.user))
            }
            return data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)




//...............OTP Verification..............


export const OTPAction = createAsyncThunk(
    "/verify",
    async (otp, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/verify",
                otp,
                config
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



//...............Login..............


export const loginAction = createAsyncThunk(
    "/login",
    async (login, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/login",
                login,
                config
            );

            if (data) {
                localStorage.setItem("login", JSON.stringify(data))

            }
            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//...............Logout..............


export const logoutAction = createAsyncThunk(
    "/logout",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {


            const { data } = await axios.get(
                "/logout",

            );

            if (data) {
                localStorage.clear("login");

            }
            return data;

        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)


//...............Create New Club..............


export const newClubAction = createAsyncThunk(
    "/admin/club/new",
    async (club, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/admin/club/new",
                club,
                config
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


//...............All Club..............


export const getAllClubAction = createAsyncThunk(
    "/admin/club",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                "/admin/club",

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



//...............Update Club Details..............


export const updateClubAction = createAsyncThunk(
    "/admin/club/:id",
    async (club, { rejectWithValue, getState, dispatch }) => {

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(
                `/admin/club/${club.clubId}`,
                club.myForm,
                config
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



//...............Delete Club Details..............


export const deleteClubAction = createAsyncThunk(
    "/admin/club/remove/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {

        try {

            const { data } = await axios.delete(
                `/admin/club/remove/${id}`,

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

//...............Create New Manager..............


export const newManagerAction = createAsyncThunk(
    "/admin/manager/new",
    async (manager, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/admin/manager/new",
                manager,
                config
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


//...............All Manager..............


export const getAllManagerAction = createAsyncThunk(
    "/admin/manager",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                "/admin/manager",

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


//...............Update Manager Details..............


export const updateManagerAction = createAsyncThunk(
    "/admin/manager/:id",
    async (manager, { rejectWithValue, getState, dispatch }) => {

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(
                `/admin/manager/${manager.managerId}`,
                manager.myForm,
                config
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


//...............Delete Manager Details..............


export const deleteManagerAction = createAsyncThunk(
    "/admin/manager/remove/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {

        try {

            const { data } = await axios.delete(
                `/admin/manager/remove/${id}`,

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


//...............Create New Player..............


export const newPlayerAction = createAsyncThunk(
    "/admin/player/new",
    async (player, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/admin/player/new",
                player,
                config
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

//...............All Player..............


export const getAllPlayerAction = createAsyncThunk(
    "/admin/player",
    async ({ rejectWithValue, getState, dispatch }) => {
        try {

            const { data } = await axios.get(
                "/admin/player",

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


//...............Update Player Details..............


export const updatePlayerAction = createAsyncThunk(
    "/admin/player/:id",
    async (player, { rejectWithValue, getState, dispatch }) => {

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(
                `/admin/player/${player.playerId}`,
                player.myForm,
                config
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


//...............Delete Player Details..............


export const deletePlayerAction = createAsyncThunk(
    "/admin/player/remove/:id",
    async (id, { rejectWithValue, getState, dispatch }) => {

        try {

            const { data } = await axios.delete(
                `/admin/player/remove/${id}`,

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

const adminSlices = createSlice({
    name: "admin",
    initialState: {
        userAuth: 'register',
    },

    extraReducers: (builder) => {
        //register
        builder.addCase(registerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.registered = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(registerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //OTP Verify

        builder.addCase(OTPAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(OTPAction.fulfilled, (state, action) => {
            state.loading = false;
            state.verify = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(OTPAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Login

        builder.addCase(loginAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.logged = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Create Club

        builder.addCase(newClubAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newClubAction.fulfilled, (state, action) => {
            state.loading = false;
            state.newClub = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newClubAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //All Club

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


        //Get Club Details

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

        //Delete Club Details

        builder.addCase(deleteClubAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deleteClubAction.fulfilled, (state, action) => {
            state.loading = false;
            state.dleteClub = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deleteClubAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

        //Update Club Details

        builder.addCase(updateClubAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updateClubAction.fulfilled, (state, action) => {
            state.loading = false;
            state.updateClub = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updateClubAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Create Manager

        builder.addCase(newManagerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newManagerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.newManager = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newManagerAction.rejected, (state, action) => {
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


        //Get Manager Details

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

        //Update Manager Details

        builder.addCase(updateManagerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updateManagerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.updateManager = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updateManagerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Delete Manager Details

        builder.addCase(deleteManagerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deleteManagerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.dleteManager = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deleteManagerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Create Player

        builder.addCase(newPlayerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newPlayerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.newPlayer = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(newPlayerAction.rejected, (state, action) => {
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


        //Get Player Details

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

        //Update Player Details

        builder.addCase(updatePlayerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updatePlayerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.updatePlayer = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(updatePlayerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });


        //Delete Player Details

        builder.addCase(deletePlayerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deletePlayerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.dletePlayer = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(deletePlayerAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });



        //Logout

        builder.addCase(logoutAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(logoutAction.fulfilled, (state, action) => {
            state.loading = false;
            state.logout = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(logoutAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });

    }
})



export default adminSlices.reducer;