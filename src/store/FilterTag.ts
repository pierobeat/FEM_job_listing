import { create } from 'zustand';

type FilterTagStore = {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  clearTags: () => void;
};

export const useFilterTagStore = create<FilterTagStore>((set) => ({
  tags: [],
  addTag: (tag) => set((state) => state.tags.includes(tag) ? state : { tags: [...state.tags, tag] }),
  removeTag: (tag) => set((state) => ({ tags: state.tags.filter((t) => t !== tag) })),
  clearTags: () => set({ tags: [] }),
}))