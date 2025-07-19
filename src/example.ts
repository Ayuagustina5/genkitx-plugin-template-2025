import { postgresFlow } from './index';
import { initializeGenkit } from 'genkit';
import * as config from '../config.json';

initializeGenkit();

postgresFlow(config).then((result) => {
  console.log(result);
});
