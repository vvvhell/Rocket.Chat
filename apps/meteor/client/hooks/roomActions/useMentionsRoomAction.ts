import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const MentionsTab = lazy(() => import('../../views/room/contextualBar/MentionsTab'));

export const useMentionsRoomAction = (): ToolboxAction => {
	return {
		id: 'mentions',
		groups: ['channel', 'group', 'team'],
		title: 'Mentions',
		icon: 'at',
		template: MentionsTab,
		order: 9,
	};
};
