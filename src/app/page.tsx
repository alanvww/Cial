// app/page.tsx
'use client';

import { useState } from 'react';
import { TableView } from '@/components/TableView';
import { User } from '@/types';
import { users } from '@/data/users';
import { Button, DropdownMenu, TextField } from '@radix-ui/themes';
import {
	Plus,
	Filter,
	ChevronDown,
	Search,
	LayoutGrid,
	Calendar,
	PieChart,
	Settings,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	const [selectedCustomFields, setSelectedCustomFields] = useState<string[]>(
		[]
	);
	const [sortBy, setSortBy] = useState('Date Joined');

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div className="w-16 bg-navy-blue text-white p-4 flex flex-col items-center space-y-6">
				<div className="bg-blue-500 p-2 rounded-lg">
					<PieChart size={24} />
				</div>
				<LayoutGrid size={24} />
				<Calendar size={24} />
				<Settings size={24} />
			</div>

			{/* Main content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Header */}
				<header className="bg-white shadow-sm p-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold">Members</h1>
					<div className="flex items-center space-x-4">
						<Button>
							<Plus className="mr-2" />
							Add New Member
						</Button>
						<TextField.Root placeholder="Search...">
							<TextField.Slot>
								<Search className="h-4 w-4" />
							</TextField.Slot>
						</TextField.Root>
						<Image
							src="/avatar.png"
							alt="User Avatar"
							className="w-8 h-8 rounded-full"
							width={32}
							height={32}
						/>
					</div>
				</header>

				{/* Sub-header */}
				<div className="bg-white p-4 flex justify-between items-center border-b">
					<div>Total: {users.length} members</div>
					<div className="flex items-center space-x-4">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<Button variant="outline">
									Sort by: {sortBy} <ChevronDown className="ml-2" />
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Item onSelect={() => setSortBy('Date Joined')}>
									Date Joined
								</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => setSortBy('Name')}>
									Name
								</DropdownMenu.Item>
								{/* Add more sorting options */}
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<Button variant="outline">
							<Filter className="mr-2" />
							Filter
						</Button>
					</div>
				</div>

				{/* Table */}
				<div className="flex-1 overflow-x-auto">
					<TableView
						users={users}
						customFields={selectedCustomFields}
						availableFields={Object.keys(users[0].customFields)}
						onCustomFieldsChange={setSelectedCustomFields}
					/>
				</div>
			</div>
		</div>
	);
}