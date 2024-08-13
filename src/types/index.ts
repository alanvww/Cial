// types/index.ts
export interface User {
	id: string;
	avatarUrl: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	accountType: string;
	joinDate: string;
	recentEvents: {
		eventId: string;
		eventName: string;
		dateJoined: string;
	}[];
	customFields: {
		socialMedia?: {
			linkedin?: string;
			twitter?: string;
		};
		occupation?: string;
		interests?: string[];
	};
	metrics: {
		loginCount: number;
		lastLogin: string;
		eventAttendance: number;
	};
	preferences: {
		newsletterSubscription: boolean;
		notificationSettings: {
			email: boolean;
			sms: boolean;
			pushNotifications: boolean;
		};
	};
	organizationRole: string;
	tags: string[];
}
