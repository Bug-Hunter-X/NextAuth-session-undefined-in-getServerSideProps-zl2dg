```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Page() {
  const session = await unstable_getServerSession(req, res, authOptions);

  // ... rest of your code
}
```