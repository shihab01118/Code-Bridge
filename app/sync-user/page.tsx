import prisma from '@/server/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { notFound, redirect } from 'next/navigation';

const SyncUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('User not found');
  }

  const user = await currentUser();

  if (!user?.emailAddresses[0].emailAddress) {
    return notFound();
  }

  await prisma.user.upsert({
    where: {
      emailAddress: user.emailAddresses[0].emailAddress ?? ''
    },
    update: {
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName
    },
    create: {
      id: userId,
      emailAddress: user.emailAddresses[0].emailAddress ?? '',
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName
    }
  });

  return redirect('/dashboard');
};

export default SyncUser;
