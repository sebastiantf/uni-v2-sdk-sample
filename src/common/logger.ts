import * as winston from 'winston';
import * as util from 'util';

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    winston.format.colorize(),
    winston.format.printf((info) => {
      const key: any = Symbol.for('splat');
      const args = info[key];
      const message = (info.message || '').trim();
      const objects = (args || [])
        .map((arg: any) => {
          return util.inspect(arg, {
            colors: true,
          });
        })
        .join(' ');
      return `${info.timestamp}::${info.level}: ${message} ${objects}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
