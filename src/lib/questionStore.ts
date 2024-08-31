import { create } from 'zustand'

interface QuestionState {
  passed: boolean
  score: number
  updateScore: (point: number) => void
  generateQuestion: () => number
}

const useQuestionState = create<QuestionState>()((set) => ({
  passed: false,
  score: 0,
  updateScore: (point: number) => set((state) => ({score: state.score + point})),
  generateQuestion: () => { return Math.floor(Math.random() * 10) + 1; }
}));

export default useQuestionState;