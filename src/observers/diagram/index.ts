import { IDiagramObserver, subscriber } from '@appTypes/index';

export class Observer implements IDiagramObserver {
  private static instance: Observer | null = null;
  private observers: subscriber[] = [];

  static getInstance(): Observer {
    if (!Observer.instance) {
      Observer.instance = new Observer();
    }
    return Observer.instance;
  }

  public subscribe(sub: subscriber) {
    this.observers.push(sub);
  }

  public unsubscribe(sub: subscriber) {
    this.observers.filter((subs) => subs !== sub);
  }

  public notify(isDiagramCreated: boolean) {
    this.observers.forEach((observer) => observer(isDiagramCreated));
  }
}

export const diagramObserver = Observer.getInstance();
