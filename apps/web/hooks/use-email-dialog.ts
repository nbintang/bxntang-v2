import { create } from "zustand";

type DialogMailProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const useEmailDialog = create<DialogMailProps>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
}))