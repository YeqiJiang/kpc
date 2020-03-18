import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-tree-select
            [(value)]="values"
            [multiple]="true"
            [data]="[
                {
                    label: 'First floor-1',
                    key: '1',
                    children: [
                        {
                            label: 'Second floor-1.1',
                            key: '1.1',
                            children: [
                                {
                                    label: 'Third floor-1.1.1',
                                    key: '1.1.1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'First floor-2',
                    key: '2',
                    children: [
                        {
                            label: 'Second floor-2.1',
                            key: '2.1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: '2.1.1' 
                                },
                                {
                                    label: 'Third floor-2.1.2',
                                    key: '2.1.2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            disabled: true,
                            key: '2.2',
                            children: [
                                {
                                    label: 'Third floor-2.2.1',
                                    key: '2.2.1'
                                }
                            ]
                        }
                    ]
                }
            ]"
        ></k-tree-select>
    `,
})
export class AppDemoComponent {
    private values;
}