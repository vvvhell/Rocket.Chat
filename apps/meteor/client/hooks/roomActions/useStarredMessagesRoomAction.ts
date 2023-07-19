import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const StarredMessagesTab = lazy(() => import('../../views/room/contextualBar/StarredMessagesTab'));

export const useStarredMessagesRoomAction = (): ToolboxAction => {
	return {
		id: 'starred-messages',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		title: 'Starred_Messages',
		icon: 'star',
		template: StarredMessagesTab,
		order: 10,
	};
};
