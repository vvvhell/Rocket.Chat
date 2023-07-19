import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const TeamsInfoWithRooms = lazy(() => import('../../views/teams/contextualBar/info/TeamsInfoWithRooms'));

export const useTeamInfoRoomAction = (): ToolboxAction => {
	return {
		id: 'team-info',
		groups: ['team'],
		anonymous: true,
		full: true,
		title: 'Teams_Info',
		icon: 'info-circled',
		template: TeamsInfoWithRooms,
		order: 1,
	};
};
