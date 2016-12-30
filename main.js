import Exponent from 'exponent';
import FleetrMobile from './app/FleetrMobile';

// const METEOR_URL = 'ws://localhost:3000/websocket';
const METEOR_URL = 'wss://fleetr.eu/websocket';

Exponent.registerRootComponent(FleetrMobile(METEOR_URL));
