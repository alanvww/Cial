// types/index.ts
export interface User {
	id: string;
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
		occupation: string;
		socialMedia: {
			linkedin: string;
			twitter: string;
		};
		interests: string[];
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
