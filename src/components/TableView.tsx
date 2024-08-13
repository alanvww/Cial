// components/TableView.tsx
'use client';

import { useState, useCallback } from 'react';
import { Table, Button, DropdownMenu, Tooltip } from '@radix-ui/themes';
import { User } from '@/types';
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Check, Copy, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface TableProps {
	users: User[];
	customFields: string[];
	availableFields: string[];
	onCustomFieldsChange: (fields: string[]) => void;
}

const getInterestColor = (index: number) => {
	const colors = [
		'bg-red-200 text-red-800',
		'bg-blue-200 text-blue-800',
		'bg-green-200 text-green-800',
		'bg-yellow-200 text-yellow-800',
		'bg-purple-200 text-purple-800',
		'bg-pink-200 text-pink-800',
		'bg-indigo-200 text-indigo-800',
	];
	return colors[index % colors.length];
};

export function TableView({
	users,
	customFields,
	availableFields,
	onCustomFieldsChange,
}: TableProps) {
	const [contextMenu, setContextMenu] = useState<{
		x: number;
		y: number;
		content: string;
	} | null>(null);
	const router = useRouter();

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

	const handleRowClick = (userId: string) => {
		router.push(`/user/${userId}`);
	};

	return (
		<div className="overflow-x-auto">
			<Table.Root className="w-full">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell className="py-3 px-4">
							Avatar
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="py-3 px-4">
							Name
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="py-3 px-4">
							Email
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="py-3 px-4">
							Phone
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="py-3 px-4">
							Tier
						</Table.ColumnHeaderCell>
						{customFields.map((field) => (
							<Table.ColumnHeaderCell key={field} className="py-3 px-4">
								{formatHeaderText(field)}
							</Table.ColumnHeaderCell>
						))}
						<Table.ColumnHeaderCell className="py-3 px-4 text-right">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button variant="ghost" size="1">
										<Settings size={16} />
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
							onClick={() => handleRowClick(user.id)}
							className="cursor-pointer hover:bg-gray-50"
						>
							<Table.Cell className="py-3 px-4">
								<Image
									src={user.avatarUrl || '/avatar.png'}
									alt={`${user.firstName} ${user.lastName}`}
									className="w-8 h-8 rounded-full"
									width={32}
									height={32}
								/>
							</Table.Cell>
							<Table.Cell className="py-3 px-4">
								<div className="flex items-center h-full">
									{renderCell(`${user.firstName} ${user.lastName}`)}
								</div>
							</Table.Cell>
							<Table.Cell className="py-3 px-4">
								<div className="flex items-center h-full">
									{renderCell(user.email)}
								</div>
							</Table.Cell>
							<Table.Cell className="py-3 px-4">
								<div className="flex items-center h-full">
									{renderCell(user.phone)}
								</div>
							</Table.Cell>
							<Table.Cell className="py-3 px-4">
								<div className="flex items-center h-full">
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold ${
											user.accountType === 'paid'
												? 'bg-green-500 text-white'
												: 'bg-gray-200 text-gray-800'
										}`}
									>
										{user.accountType === 'paid' ? 'Paid' : 'Free'}
									</span>
								</div>
							</Table.Cell>
							{customFields.map((field) => {
								const content = getNestedValue(user.customFields, field);
								return (
									<Table.Cell key={field} className="py-3 px-4">
										<div className="flex items-center h-full">
											{field === 'socialMedia' ? (
												<div className="flex space-x-2">
													{content.linkedin && (
														<a
															href={content.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															className="text-blue-600 hover:underline"
														>
															<LinkedInLogoIcon />
														</a>
													)}
													{content.twitter && (
														<a
															href={content.twitter}
															target="_blank"
															rel="noopener noreferrer"
															className="text-blue-400 hover:underline"
														>
															<TwitterLogoIcon />
														</a>
													)}
												</div>
											) : field === 'occupation' ? (
												<span>{content}</span>
											) : field === 'interests' ? (
												<div className="flex flex-wrap gap-1">
													{content.map((interest: string, index: number) => (
														<span
															key={index}
															className={`px-2 py-1 rounded-full text-xs font-semibold ${getInterestColor(
																index
															)}`}
														>
															{interest}
														</span>
													))}
												</div>
											) : (
												renderCell(content)
											)}
										</div>
									</Table.Cell>
								);
							})}
							<Table.Cell className="py-3 px-4"></Table.Cell>
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