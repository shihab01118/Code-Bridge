import { projectRouter } from './api/routers/project';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter
});

export type AppRouter = typeof appRouter;
