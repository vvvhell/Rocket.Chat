import { MemberListRouter } from '../../views/room';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

export const useUserInfoGroupRoomAction = (): ToolboxAction => {
	return {
		id: 'user-info-group',
		groups: ['direct_multiple'],
		title: 'Members',
		icon: 'members',
		template: MemberListRouter,
		order: 1,
	};
};
