import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySessions = createSelector(
    [selectDirectory],
    directory => directory.sections
)