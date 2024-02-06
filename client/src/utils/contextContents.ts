import { AllContentsContext } from '../pages/AllDynamicsContents';
import { useContext } from 'react';
import { AllContentsContextProps } from '../lib/context';

export const useAllContents = () =>
	useContext(AllContentsContext) as AllContentsContextProps;
