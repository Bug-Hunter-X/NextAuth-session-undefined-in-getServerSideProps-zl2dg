```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session: session,
    },
  };
}

export default function Page({ session }) {
  // Use the session here; it's populated from getServerSideProps now.
  if (session) {
    console.log('Session:', session);
  } else {
    console.log('No session found.');
  }
  return (
    <div>
      <h1>Home Page</h1>
      {session && <p>User: {session.user.email}</p>}
    </div>
  );
}
```