// import { readBody, defineEventHandler} from 'h3';
import { defineCachedEventHandler } from '#imports';

export default defineCachedEventHandler(
  async (event) => {
    try {
      // const mockData = await $fetch('https://api.example.com/data');
      const mockData = { date: new Date(), title: 'My title', components: 'Test' };
      return { mockData, timestamp: new Date().toISOString() };
    } catch (error) {
      const err = error as Error;
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: err.message,
        }),
      );
    }
  },
  {
    maxAge: 60 * 5, // 5min cache
    name: 'my-data-cache',
    // getKey: (event) => event.path, // Optional: user defined key
  },
);