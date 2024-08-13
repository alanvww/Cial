// data/users.ts
import { User } from '@/types';

export const users: User[] = [
	{
		id: 'user-001',
		avatarUrl: '/avatar.png',
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		phone: '+1234567890',
		accountType: 'paid',
		joinDate: '2024-01-15T10:00:00Z',
		recentEvents: [
			{
				eventId: 'event-101',
				eventName: 'Annual Conference',
				dateJoined: '2024-07-15T09:00:00Z',
			},
			{
				eventId: 'event-102',
				eventName: 'Workshop Series',
				dateJoined: '2024-08-01T14:30:00Z',
			},
		],
		customFields: {
			occupation: 'Software Engineer',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/johndoe',
				twitter: '@johndoe',
			},
			interests: ['AI', 'Data Science', 'Cloud Computing'],
		},
		metrics: {
			loginCount: 27,
			lastLogin: '2024-08-08T18:45:00Z',
			eventAttendance: 0.85,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: false,
				pushNotifications: true,
			},
		},
		organizationRole: 'member',
		tags: ['active', 'volunteer', 'technical'],
	},
	{
		id: 'user-002',
		avatarUrl: '/avatar.png',
		firstName: 'Jane',
		lastName: 'Smith',
		email: 'jane.smith@example.com',
		phone: '+1987654321',
		accountType: 'free',
		joinDate: '2024-02-20T14:30:00Z',
		recentEvents: [
			{
				eventId: 'event-103',
				eventName: 'Networking Mixer',
				dateJoined: '2024-07-20T18:00:00Z',
			},
		],
		customFields: {
			occupation: 'Marketing Manager',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/janesmith',
				twitter: '@janesmith',
			},
			interests: ['Digital Marketing', 'Brand Strategy', 'Social Media'],
		},
		metrics: {
			loginCount: 15,
			lastLogin: '2024-08-07T10:15:00Z',
			eventAttendance: 0.6,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: true,
				pushNotifications: false,
			},
		},
		organizationRole: 'member',
		tags: ['new', 'marketing'],
	},
	{
		id: 'user-003',
		avatarUrl: '/avatar.png',
		firstName: 'Michael',
		lastName: 'Johnson',
		email: 'michael.johnson@example.com',
		phone: '+1122334455',
		accountType: 'paid',
		joinDate: '2023-11-05T09:45:00Z',
		recentEvents: [
			{
				eventId: 'event-104',
				eventName: 'Leadership Summit',
				dateJoined: '2024-06-10T08:30:00Z',
			},
			{
				eventId: 'event-105',
				eventName: 'Industry Panel',
				dateJoined: '2024-07-25T13:00:00Z',
			},
		],
		customFields: {
			occupation: 'Project Manager',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/michaeljohnson',
				twitter: '@mjohnson',
			},
			interests: ['Agile Methodology', 'Team Leadership', 'Risk Management'],
		},
		metrics: {
			loginCount: 42,
			lastLogin: '2024-08-09T16:20:00Z',
			eventAttendance: 0.9,
		},
		preferences: {
			newsletterSubscription: false,
			notificationSettings: {
				email: true,
				sms: false,
				pushNotifications: true,
			},
		},
		organizationRole: 'manager',
		tags: ['active', 'leadership'],
	},
	{
		id: 'user-004',
		avatarUrl: '/avatar.png',
		firstName: 'Emily',
		lastName: 'Brown',
		email: 'emily.brown@example.com',
		phone: '+1654987320',
		accountType: 'free',
		joinDate: '2024-03-10T11:15:00Z',
		recentEvents: [
			{
				eventId: 'event-106',
				eventName: 'Tech Startup Pitch',
				dateJoined: '2024-08-05T19:00:00Z',
			},
		],
		customFields: {
			occupation: 'UX Designer',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/emilybrown',
				twitter: '@emilyuxdesign',
			},
			interests: ['User-Centered Design', 'Prototyping', 'Usability Testing'],
		},
		metrics: {
			loginCount: 8,
			lastLogin: '2024-08-08T14:50:00Z',
			eventAttendance: 0.4,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: { email: true, sms: true, pushNotifications: true },
		},
		organizationRole: 'member',
		tags: ['new', 'design'],
	},
	{
		id: 'user-005',
		avatarUrl: '/avatar.png',
		firstName: 'David',
		lastName: 'Lee',
		email: 'david.lee@example.com',
		phone: '+1369852147',
		accountType: 'paid',
		joinDate: '2023-09-01T08:00:00Z',
		recentEvents: [
			{
				eventId: 'event-107',
				eventName: 'Data Science Symposium',
				dateJoined: '2024-07-12T09:30:00Z',
			},
			{
				eventId: 'event-108',
				eventName: 'AI Ethics Workshop',
				dateJoined: '2024-08-02T15:00:00Z',
			},
		],
		customFields: {
			occupation: 'Data Scientist',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/davidlee',
				twitter: '@davidlee_data',
			},
			interests: ['Machine Learning', 'Big Data', 'Statistical Analysis'],
		},
		metrics: {
			loginCount: 35,
			lastLogin: '2024-08-09T11:30:00Z',
			eventAttendance: 0.8,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: false,
				pushNotifications: true,
			},
		},
		organizationRole: 'member',
		tags: ['active', 'technical', 'speaker'],
	},
	{
		id: 'user-006',
		avatarUrl: '/avatar.png',
		firstName: 'Sarah',
		lastName: 'Wilson',
		email: 'sarah.wilson@example.com',
		phone: '+1147258369',
		accountType: 'free',
		joinDate: '2024-04-05T13:45:00Z',
		recentEvents: [
			{
				eventId: 'event-109',
				eventName: 'Women in Tech Meetup',
				dateJoined: '2024-08-07T18:30:00Z',
			},
		],
		customFields: {
			occupation: 'Frontend Developer',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/sarahwilson',
				twitter: '@sarahcodes',
			},
			interests: ['React', 'Vue.js', 'Web Accessibility'],
		},
		metrics: {
			loginCount: 12,
			lastLogin: '2024-08-09T09:15:00Z',
			eventAttendance: 0.5,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: true,
				pushNotifications: false,
			},
		},
		organizationRole: 'member',
		tags: ['new', 'frontend'],
	},
	{
		id: 'user-007',
		avatarUrl: '/avatar.png',
		firstName: 'Robert',
		lastName: 'Taylor',
		email: 'robert.taylor@example.com',
		phone: '+1753951486',
		accountType: 'paid',
		joinDate: '2023-12-10T16:30:00Z',
		recentEvents: [
			{
				eventId: 'event-110',
				eventName: 'Cybersecurity Conference',
				dateJoined: '2024-06-20T08:00:00Z',
			},
			{
				eventId: 'event-111',
				eventName: 'Ethical Hacking Workshop',
				dateJoined: '2024-07-30T14:00:00Z',
			},
		],
		customFields: {
			occupation: 'Information Security Analyst',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/roberttaylor',
				twitter: '@robertsecurity',
			},
			interests: ['Network Security', 'Penetration Testing', 'Cryptography'],
		},
		metrics: {
			loginCount: 30,
			lastLogin: '2024-08-08T20:45:00Z',
			eventAttendance: 0.75,
		},
		preferences: {
			newsletterSubscription: false,
			notificationSettings: {
				email: true,
				sms: false,
				pushNotifications: true,
			},
		},
		organizationRole: 'member',
		tags: ['active', 'security'],
	},
	{
		id: 'user-008',
		avatarUrl: '/avatar.png',
		firstName: 'Laura',
		lastName: 'Martinez',
		email: 'laura.martinez@example.com',
		phone: '+1258963147',
		accountType: 'free',
		joinDate: '2024-05-20T10:00:00Z',
		recentEvents: [
			{
				eventId: 'event-112',
				eventName: 'Digital Marketing Trends',
				dateJoined: '2024-08-03T11:00:00Z',
			},
		],
		customFields: {
			occupation: 'Content Strategist',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/lauramartinez',
				twitter: '@lauracontentpro',
			},
			interests: ['Content Marketing', 'SEO', 'Social Media Strategy'],
		},
		metrics: {
			loginCount: 6,
			lastLogin: '2024-08-09T13:10:00Z',
			eventAttendance: 0.3,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: { email: true, sms: true, pushNotifications: true },
		},
		organizationRole: 'member',
		tags: ['new', 'marketing'],
	},
	{
		id: 'user-009',
		avatarUrl: '/avatar.png',
		firstName: 'Daniel',
		lastName: 'Kim',
		email: 'daniel.kim@example.com',
		phone: '+1951753852',
		accountType: 'paid',
		joinDate: '2023-10-15T09:30:00Z',
		recentEvents: [
			{
				eventId: 'event-113',
				eventName: 'DevOps Summit',
				dateJoined: '2024-07-05T08:30:00Z',
			},
			{
				eventId: 'event-114',
				eventName: 'Cloud Migration Strategies',
				dateJoined: '2024-08-01T10:00:00Z',
			},
		],
		customFields: {
			occupation: 'DevOps Engineer',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/danielkim',
				twitter: '@danieldevops',
			},
			interests: ['Continuous Integration', 'Docker', 'Kubernetes'],
		},
		metrics: {
			loginCount: 45,
			lastLogin: '2024-08-09T15:30:00Z',
			eventAttendance: 0.95,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: false,
				pushNotifications: true,
			},
		},
		organizationRole: 'member',
		tags: ['active', 'technical', 'mentor'],
	},
	{
		id: 'user-010',
		avatarUrl: '/avatar.png',
		firstName: 'Olivia',
		lastName: 'Garcia',
		email: 'olivia.garcia@example.com',
		phone: '+1357159852',
		accountType: 'free',
		joinDate: '2024-06-01T14:00:00Z',
		recentEvents: [
			{
				eventId: 'event-115',
				eventName: 'Startup Funding Workshop',
				dateJoined: '2024-08-06T16:00:00Z',
			},
		],
		customFields: {
			occupation: 'Entrepreneur',
			socialMedia: {
				linkedin: 'https://www.linkedin.com/in/oliviagarcia',
				twitter: '@oliviastartsup',
			},
			interests: [
				'Startup Ecosystems',
				'Venture Capital',
				'Business Model Innovation',
			],
		},
		metrics: {
			loginCount: 4,
			lastLogin: '2024-08-08T19:20:00Z',
			eventAttendance: 0.2,
		},
		preferences: {
			newsletterSubscription: true,
			notificationSettings: {
				email: true,
				sms: true,
				pushNotifications: false,
			},
		},
		organizationRole: 'member',
		tags: ['new', 'entrepreneur'],
	},
];
