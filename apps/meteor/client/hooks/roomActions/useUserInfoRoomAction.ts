import { MemberListRouter } from '../../views/room';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

export const useUserInfoRoomAction = (): ToolboxAction => {
	return {
		id: 'user-info',
		groups: ['direct'],
		title: 'User_Info',
		icon: 'user',
		template: MemberListRouter,
		order: 1,
	};
};
