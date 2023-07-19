import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const Info = lazy(() => import('../../views/room/contextualBar/Info'));

export const useChannelSettingsRoomAction = (): ToolboxAction => {
	return {
		id: 'channel-settings',
		groups: ['channel', 'group'],
		anonymous: true,
		full: true,
		title: 'Room_Info',
		icon: 'info-circled',
		template: Info,
		order: 1,
	};
};
