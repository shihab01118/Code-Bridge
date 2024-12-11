import { auth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';

const trpc = initTRPC.create();

export const router = trpc.router;
export const publicProcedure = trpc.procedure;

const isAuthenticated = trpc.middleware(async ({ ctx, next }) => {
  const user = await auth();

  if (!user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to access this resource'
    });
  }

  return next({
    ctx: {
      ...ctx,
      user
    }
  });
});

export const protectedProcedure = trpc.procedure.use(isAuthenticated);
