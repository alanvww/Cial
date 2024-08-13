// components/UserProfile.tsx
'use client';

import { Flex, Text, Card } from '@radix-ui/themes';
import { User } from '@/types';

interface UserProfileProps {
	user: User;
}

export function UserProfile({ user }: UserProfileProps) {
	return (
		<Card className="p-6">
			<Flex direction="column" gap="3">
				<Text size="5" weight="bold">
					User Profile
				</Text>
				<Text>
					Name: {user.firstName} {user.lastName}
				</Text>
				<Text>Email: {user.email}</Text>
				<Text>Phone: {user.phone}</Text>
				<Text>Account Type: {user.accountType}</Text>
				<Text>Join Date: {new Date(user.joinDate).toLocaleString()}</Text>

				<Text weight="bold">Recent Events:</Text>
				{user.recentEvents.map((event) => (
					<Flex key={event.eventId} gap="2">
						<Text>{event.eventName}</Text>
						<Text>({new Date(event.dateJoined).toLocaleString()})</Text>
					</Flex>
				))}

				<Text weight="bold">Custom Fields:</Text>
				<Text>Occupation: {user.customFields.occupation}</Text>
				<Text>LinkedIn: {user.customFields.socialMedia.linkedin}</Text>
				<Text>Twitter: {user.customFields.socialMedia.twitter}</Text>
				<Text>Interests: {user.customFields.interests.join(', ')}</Text>

				<Text weight="bold">Metrics:</Text>
				<Text>Login Count: {user.metrics.loginCount}</Text>
				<Text>
					Last Login: {new Date(user.metrics.lastLogin).toLocaleString()}
				</Text>
				<Text>
					Event Attendance: {(user.metrics.eventAttendance * 100).toFixed(2)}%
				</Text>

				<Text weight="bold">Preferences:</Text>
				<Text>
					Newsletter Subscription:{' '}
					{user.preferences.newsletterSubscription ? 'Yes' : 'No'}
				</Text>
				<Text>
					Email Notifications:{' '}
					{user.preferences.notificationSettings.email ? 'On' : 'Off'}
				</Text>
				<Text>
					SMS Notifications:{' '}
					{user.preferences.notificationSettings.sms ? 'On' : 'Off'}
				</Text>
				<Text>
					Push Notifications:{' '}
					{user.preferences.notificationSettings.pushNotifications
						? 'On'
						: 'Off'}
				</Text>

				<Text>Organization Role: {user.organizationRole}</Text>
				<Text>Tags: {user.tags.join(', ')}</Text>
			</Flex>
		</Card>
	);
}
