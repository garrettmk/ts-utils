
export enum PromiseState {
    Pending = 'pending',
    Resolved = 'resolved',
    Rejected = 'rejected'
}

export class ControlledPromise<Type> extends Promise<Type> {
    public state: PromiseState = PromiseState.Pending;
    protected readonly resolver?: (value: Type) => void;
    protected readonly rejector?: (reason: any) => void;

    constructor(executor?: (res: (value: Type) => void, rej: (reason: any) => void) => void) {
        let resolver;
        let rejector;

        super((resolve, reject) => {
            resolver = resolve;
            rejector = reject;

            executor?.(resolve, reject);
        });

        this.resolver = resolver;
        this.rejector = rejector;
    }

    public resolve(value: Type) {
        this.state = PromiseState.Resolved;
        this.resolver?.(value);
    }

    public reject(reason: any) {
        this.state = PromiseState.Rejected;
        this.rejector?.(reason);
    }
}