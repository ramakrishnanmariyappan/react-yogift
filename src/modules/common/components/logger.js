import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

logger.push({ 'logglyKey': '4fdf7d92-47d0-47d0-8788-5bad9c51ae4d' });

export default logger;