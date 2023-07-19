import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const TeamsChannels = lazy(() => import('../../views/teams/contextualBar/channels/TeamsChannels'));

export const useTeamChannelsRoomAction = (): ToolboxAction => {
	return {
		id: 'team-channels',
		groups: ['team'],
		anonymous: true,
		full: true,
		title: 'Team_Channels',
		icon: 'hash',
		template: TeamsChannels,
		order: 2,
	};
};
