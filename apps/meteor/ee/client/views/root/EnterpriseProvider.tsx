import type { ReactNode } from 'react';
import React from 'react';

import { useDeviceManagement } from './hooks/useDeviceManagement';
import { useEngagementDashboard } from './hooks/useEngagementDashboard';
import { useReadReceipts } from './hooks/useReadReceipts';

type EnterpriseProviderProps = {
	children: ReactNode;
};

const EnterpriseProvider = ({ children }: EnterpriseProviderProps) => {
	useReadReceipts();
	useEngagementDashboard();
	useDeviceManagement();

	return <>{children}</>;
};

export default EnterpriseProvider;
