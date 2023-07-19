import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const ChatsContextualBar = lazy(() => import('../../views/omnichannel/directory/chats/contextualBar/ChatsContextualBar'));

export const useRoomInfoRoomAction = (): ToolboxAction => {
	return {
		id: 'room-info',
		groups: ['live'],
		title: 'Room_Info',
		icon: 'info-circled',
		template: ChatsContextualBar,
		order: 0,
	};
};
