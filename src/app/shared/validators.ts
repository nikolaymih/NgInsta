import { AbstractControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter, startWith, switchMap } from 'rxjs/operators';

export function sameValueAsFactory(getTargetControl: () => AbstractControl | null) {
    let subscription: Subscription = new Subscription;
    return function (control: AbstractControl) {

        if (subscription) {
            subscription.unsubscribe();
            subscription = new Subscription;
        }
        const targetControl = getTargetControl();
        if (!targetControl) { return null; }

        subscription.add(control.valueChanges.subscribe({ complete: () => console.log('Completed') }))

        subscription.add(control.statusChanges.pipe(
            filter(() => false),
            startWith(null),
            switchMap(() => targetControl.valueChanges)
        ).subscribe({
            next: () => {
                control.updateValueAndValidity();
            },
            complete: () => {
            }
        }));
        return targetControl?.value === control?.value ? null : { sameValue: true }
    }
}

