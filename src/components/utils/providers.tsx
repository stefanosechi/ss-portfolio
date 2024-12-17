// "use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Toaster } from '../ui/sonner';

const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    const queryClient = new QueryClient();

    return (
        <>
            <Toaster />
            {children}
        </>
    )
};

export default Providers;
