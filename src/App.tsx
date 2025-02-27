import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {AnimalFishBattle} from './components/select';
export const App: React.FC = () => {
    return (
        <ChakraProvider>
            <AnimalFishBattle />
        </ChakraProvider>
    );
};

