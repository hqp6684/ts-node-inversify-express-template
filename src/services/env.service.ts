import { injectable } from 'inversify';
import dotenv from 'dotenv';


export type EnvType = 'dev' | 'prod';


@injectable()
export class EnvService {

    private _prod = false;
    /**
     * Whether env is prod or dev
     */
    get prod() {
        return this._prod;
    }

    constructor(env: EnvType) {
        this.loadEnv(env);
    }

    private loadEnv(env: EnvType) {
        switch (env) {
            case 'dev':
                this._prod = false;
                dotenv.config({ path: '.env.dev' });
                break;
            case 'prod':
                this._prod = true;
                dotenv.config({ path: '.env' });
                break;
        }
    }


}