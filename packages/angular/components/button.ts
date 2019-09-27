import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Button, ButtonGroup} from '../../../components/button';

export const ButtonComponent = Intact.decorate(Button, 'k-button');
export const ButtonGroupComponent = Intact.decorate(ButtonGroup, 'k-button-group');

(<any>window).ButtonGroupComponent = ButtonGroupComponent;

const components = [ButtonComponent, ButtonGroupComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonModule {}