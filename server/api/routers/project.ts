import { protectedProcedure, router } from '@/server/trpc';
import { z } from 'zod';

export const projectRouter = router({
  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        githubUrl: z.string(),
        githubToken: z.string().optional()
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input);
    })
});
