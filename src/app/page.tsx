import { auth } from '@/auth';
import GotoSignout from '@/components/GotoSignout';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Welcome {session?.user.name} to my test app</h1>

      <GotoSignout />
    </main>
  );
}
