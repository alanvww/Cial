// app/user/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';
import { users } from '@/data/users';
import { UserProfile } from '@/components/UserProfile';
import { Button } from '@radix-ui/themes';
import { ArrowLeft } from 'lucide-react';

export default function UserProfilePage({
	params,
}: {
	params: { id: string };
}) {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	useEffect(() => {
		const foundUser = users.find((u) => u.id === params.id);
		setUser(foundUser || null);
	}, [params.id]);

	if (!user) {
		return <div>User not found</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<Button onClick={() => router.push('/')} className="mb-4">
				<ArrowLeft className="mr-2" />
				Back to Table
			</Button>
			<UserProfile user={user} />
		</div>
	);
}
