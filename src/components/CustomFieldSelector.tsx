// components/CustomFieldSelector.tsx
'use client';

import { Flex, Button, Tooltip } from '@radix-ui/themes';
import { Plus } from 'lucide-react';

interface CustomFieldSelectorProps {
	availableFields: string[];
	selectedFields: string[];
	onSelectionChange: (fields: string[]) => void;
}

export function CustomFieldSelector({
	availableFields,
	selectedFields,
	onSelectionChange,
}: CustomFieldSelectorProps) {
	const handleFieldToggle = (field: string) => {
		const updatedFields = selectedFields.includes(field)
			? selectedFields.filter((f) => f !== field)
			: [...selectedFields, field];
		onSelectionChange(updatedFields);
	};

	return (
		<Flex gap="2" className="mb-4 flex-wrap">
			{availableFields.map((field) => (
				<Tooltip key={field} content={`Add ${field} to table`}>
					<Button
						variant={selectedFields.includes(field) ? 'solid' : 'outline'}
						onClick={() => handleFieldToggle(field)}
					>
						<Plus className="mr-1" />
						{field}
					</Button>
				</Tooltip>
			))}
		</Flex>
	);
}
