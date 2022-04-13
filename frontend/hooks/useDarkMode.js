import {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark mode", initialValue);
    return ([darkMode, setDarkMode]);
};