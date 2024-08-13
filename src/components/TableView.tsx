// components/TableView.tsx
'use client';

import { Table, Button, DropdownMenu, Tooltip } from '@radix-ui/themes';
import { User } from '@/types';
import { Plus, Check, Copy } from 'lucide-react';
import { useState, useCallback } from 'react';

interface TableProps {
	users: User[];
	onUserClick: (user: User) => void;
	customFields: string[];
	availableFields: string[];
	onCustomFieldsChange: (fields: string[]) => void;
}

export function TableView({
	users,
	onUserClick,
	customFields,
	availableFields,
	onCustomFieldsChange,
}: TableProps) {
	const [contextMenu, setContextMenu] = useState<{
		x: number;
		y: number;
		content: string;
	} | null>(null);

	const getNestedValue = (obj: any, path: string) => {
		return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
	};

	const toggleCustomField = (field: string) => {
		const updatedFields = customFields.includes(field)
			? customFields.filter((f) => f !== field)
			: [...customFields, field];
		onCustomFieldsChange(updatedFields);
	};

	const formatHeaderText = (text: string) => {
		return text
			.split(/(?=[A-Z])/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	const handleRightClick = useCallback(
		(e: React.MouseEvent, content: string) => {
			e.preventDefault();
			setContextMenu({ x: e.clientX, y: e.clientY, content });
		},
		[]
	);

	const handleCopy = useCallback((content: string) => {
		navigator.clipboard.writeText(content);
		setContextMenu(null);
	}, []);

	const renderCell = (content: string | React.ReactNode) => (
		<Tooltip
			content={
				typeof content === 'string' ? content : 'Cannot preview this content'
			}
		>
			<div
				className="truncate"
				onContextMenu={(e) =>
					handleRightClick(
						e,
						typeof content === 'string' ? content : 'Cannot copy this content'
					)
				}
			>
				{content}
			</div>
		</Tooltip>
	);

	return (
		<div className="overflow-x-auto">
			<Table.Root variant="surface" className="w-full">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell width="15%">Name</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell width="20%">Email</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell width="15%">Phone</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell width="10%">Type</Table.ColumnHeaderCell>
						{customFields.map((field) => (
							<Table.ColumnHeaderCell key={field} width="15%">
								{formatHeaderText(field)}
							</Table.ColumnHeaderCell>
						))}
						<Table.ColumnHeaderCell width="5%" className="text-right">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button variant="outline" size="1">
										<Plus />
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									{availableFields.map((field) => (
										<DropdownMenu.CheckboxItem
											key={field}
											checked={customFields.includes(field)}
											onCheckedChange={() => toggleCustomField(field)}
										>
											{formatHeaderText(field)}
											{customFields.includes(field) && (
												<Check className="ml-auto" />
											)}
										</DropdownMenu.CheckboxItem>
									))}
								</DropdownMenu.Content>
							</DropdownMenu.Root>
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
							<Table.Cell>
								{renderCell(`${user.firstName} ${user.lastName}`)}
							</Table.Cell>
							<Table.Cell>{renderCell(user.email)}</Table.Cell>
							<Table.Cell>{renderCell(user.phone)}</Table.Cell>
							<Table.Cell>
								{renderCell(
									<span
										className={`
                      inline-block
                      px-2
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      text-white
                      ${
												user.accountType === 'paid'
													? 'bg-green-500'
													: 'bg-gray-500'
											}
                    `}
									>
										{user.accountType}
									</span>
								)}
							</Table.Cell>
							{customFields.map((field) => {
								const content = JSON.stringify(
									getNestedValue(user.customFields, field)
								);
								return (
									<Table.Cell key={field}>{renderCell(content)}</Table.Cell>
								);
							})}
							<Table.Cell></Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
			{contextMenu && (
				<div
					style={{
						position: 'fixed',
						top: contextMenu.y,
						left: contextMenu.x,
						background: 'white',
						border: '1px solid #ccc',
						borderRadius: '4px',
						padding: '5px',
						zIndex: 1000,
					}}
				>
					<Button onClick={() => handleCopy(contextMenu.content)}>
						<Copy size={16} /> Copy
					</Button>
				</div>
			)}
		</div>
	);
}
