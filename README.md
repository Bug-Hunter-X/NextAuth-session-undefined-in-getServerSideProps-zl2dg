# NextAuth session undefined in getServerSideProps
This issue demonstrates a common problem when using NextAuth.js with getServerSideProps. The session object is sometimes undefined despite using `unstable_getServerSession`. This is due to incorrect usage or missing context.

## Bug
The provided code snippet shows how a Next.js page attempts to access the session using `unstable_getServerSession`. However, due to missing `req` and `res` objects in the `getServerSideProps` context, the session remains undefined.

## Solution
To resolve this issue, correctly import and use the `unstable_getServerSession` function within `getServerSideProps` while passing the `req` and `res` objects which are available in that context.