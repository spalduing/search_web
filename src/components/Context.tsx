import React from 'react'
import { createContext, useState } from 'react';

export type SearchContextType = [
    title: string,
    setTitle: (title: string) => void
] | string;

export const CreateFormContext = createContext<any>({} as any);

const Context = ({ children }: any) => {
    const [title, setTitle] = useState<SearchContextType>('');
    const [objects, setObjects] = useState<any>('');

    const formFields = {
        title: [title, setTitle],
        objects: [objects, setObjects],
    };

    return (
        <CreateFormContext.Provider value={formFields}>
            {children}
        </CreateFormContext.Provider>
    );
};

export default Context;