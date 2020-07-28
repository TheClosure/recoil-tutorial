import { atom, selector, selectorFamily } from 'recoil';
import ArticleService from './ArticleService';

export const darkModeState = atom({
    key: 'darkModeState',
    default: false
});

export const articleQuery = selector({
    key: 'articleQuery',
    get: async () => {
        const articles = await ArticleService.getAll();

        return articles;
    }
});

export const toggleDarkModeState = selector({
    key: 'toggleDarkMode',
    set: ({ get, set }) => {
        const currentValue = get(darkModeState);

        set(darkModeState, !currentValue);
    }
});

export const articleByIdQuery = selectorFamily({
    key: 'articleByIdQuery',
    get: (id) => async () => {
        const article = await ArticleService.getById(id);

        return article;
    }
});
