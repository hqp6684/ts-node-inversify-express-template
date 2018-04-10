import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.render('home', {
    title: 'Home'
  });
};

@controller('/')
export class HomeController {
  @httpGet('/')
  public get(): string {
    return 'Home sweet home';
  }


}