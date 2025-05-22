// import { readBody, defineEventHandler} from 'h3';
import { defineCachedEventHandler } from '#imports';

/*export default defineEventHandler(async (event) => {
});*/
export default defineCachedEventHandler(async (event) => {
  try {
    // const data = await $fetch('https://api.example.com/data');
    const mockData = { date: new Date(), title: 'My title', components: 'Test' };
    return { mockData, timestamp: new Date().toISOString() };
  } catch (error: Error) {
    return {
      message: error.message,
      statusCode: 400,
    };
  }
}, {
  maxAge: 60 * 5, // 5min cache
  name: 'my-data-cache',
  // getKey: (event) => event.path, // Optional: user defined key
});