import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch.ts";
import { rootActions } from "@/app/rootActions.ts";

export const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
