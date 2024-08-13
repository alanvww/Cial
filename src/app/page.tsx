// app/page.tsx
'use client';

import { useState } from 'react';
import { TableView } from '@/components/TableView';
import { User } from '@/types';
import { users } from '@/data/users';
import { useRouter } from 'next/navigation';

export default function Home() {
	const [selectedCustomFields, setSelectedCustomFields] = useState<string[]>(
		[]
	);
	const router = useRouter();

	const handleUserClick = (user: User) => {
		router.push(`/user/${user.id}`);
	};

	const availableCustomFields = Object.keys(users[0].customFields);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">User Table</h1>
			<TableView
				users={users}
				onUserClick={handleUserClick}
				customFields={selectedCustomFields}
				availableFields={availableCustomFields}
				onCustomFieldsChange={setSelectedCustomFields}
			/>
		</div>
	);
}
