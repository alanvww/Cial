// components/Table.tsx
'use client';

import { Table } from '@radix-ui/themes';
import { User } from '@/types';

interface TableProps {
	users: User[];
	onUserClick: (user: User) => void;
	customFields: string[];
}

export function TableView({ users, onUserClick, customFields }: TableProps) {
	const getNestedValue = (obj: any, path: string) => {
		return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
	};

	return (
		<Table.Root variant="surface">
			<Table.Header>
				<Table.Row>
					<Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Account Type</Table.ColumnHeaderCell>
					{customFields.map((field) => (
						<Table.ColumnHeaderCell key={field}>{field}</Table.ColumnHeaderCell>
					))}
					<Table.ColumnHeaderCell>
						<div className="flex-1">ededfefefe</div>
					</Table.ColumnHeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{users.map((user) => (
					<Table.Row
						key={user.id}
						onClick={() => onUserClick(user)}
						className="cursor-pointer hover:bg-gray-100"
					>
						<Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.phone}</Table.Cell>
						<Table.Cell>
							<span
								className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white capitalize
      ${user.accountType === 'paid' ? 'bg-green-500' : 'bg-gray-500'}`}
							>
								{user.accountType}
							</span>
						</Table.Cell>{' '}
						{customFields.map((field) => (
							<Table.Cell key={field}>
								{JSON.stringify(getNestedValue(user.customFields, field))}
							</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);
}
