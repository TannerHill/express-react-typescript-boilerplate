import { useContainer, useExpressServer } from 'routing-controllers';
import 'reflect-metadata';
import { HealthController } from './controllers/healthController';
import Container from 'typedi';
import express, { static as static_ } from 'express';

const initialize = async () => {
    useContainer(Container);
    
    const expressServer = express();
    
    expressServer.use(static_('public'));
    
    const app = useExpressServer(expressServer,{
        controllers: [
            HealthController
        ]
    });
    
    const port = process.env.PORT || 8080;
    
    app.listen(port);
}

initialize();