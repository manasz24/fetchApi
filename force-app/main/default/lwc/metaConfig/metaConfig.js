import { LightningElement, api } from 'lwc';

export default class metaConfig extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels

}