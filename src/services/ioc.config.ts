
import { Container, interfaces } from 'inversify';
import { EnvType, EnvService } from './env.service';


/**
 * @returns {Container} Service Container
 */
export function getIoCContainer(envType: EnvType): Container {
    const container = new Container();

    container
        .bind<interfaces.Factory<EnvService>>('Factory<EnvService>')
        .toFactory<EnvService>((context: interfaces.Context) => {
            return (env: EnvType) => {
                return new EnvService(env);
            };
        });

    return container;

}


