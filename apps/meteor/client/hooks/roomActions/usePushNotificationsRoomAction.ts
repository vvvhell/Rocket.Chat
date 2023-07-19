import { lazy } from 'react';

import { useRoomSubscription } from '../../views/room/contexts/RoomContext';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const NotificationPreferences = lazy(() => import('../../views/room/contextualBar/NotificationPreferences'));

export const usePushNotificationsRoomAction = (): ToolboxAction | undefined => {
	const subscription = useRoomSubscription();
	const capable = !!subscription;

	if (!capable) {
		return undefined;
	}

	return {
		id: 'push-notifications',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		title: 'Notifications_Preferences',
		icon: 'bell',
		template: NotificationPreferences,
		order: 8,
	};
};
