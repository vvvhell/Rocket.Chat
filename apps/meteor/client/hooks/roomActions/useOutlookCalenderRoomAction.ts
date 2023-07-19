import { useSetting } from '@rocket.chat/ui-contexts';
import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const OutlookEventsRoute = lazy(() => import('../../views/outlookCalendar/OutlookEventsRoute'));

export const useOutlookCalenderRoomAction = (): ToolboxAction | undefined => {
	const enabled = useSetting('Outlook_Calendar_Enabled', false);

	if (!enabled) {
		return undefined;
	}

	return {
		id: 'outlookCalendar',
		groups: ['channel', 'group', 'team'],
		icon: 'calendar',
		title: 'Outlook_calendar',
		template: OutlookEventsRoute,
		order: 999,
	};
};
