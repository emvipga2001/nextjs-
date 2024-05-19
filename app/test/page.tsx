'use client';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Link href="/login">
        <Button className="mt-4 w-full">
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </Link>
    );
  } else {
    return (
      // <form
      //   action={async () => {
      //     await signOut();
      //   }}
      // >
      //   <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      //     <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
      //   </button>
      // </form>
    );
  }
}
