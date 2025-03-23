import { create } from "zustand"

interface RainbowState {
  isRainbow: boolean
  toggleRainbow: () => void
}

export const useRainbowStore = create<RainbowState>((set) => ({
  isRainbow: false,
  toggleRainbow: () => set((state) => ({ isRainbow: !state.isRainbow })),
}))

