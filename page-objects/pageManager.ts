import {Page, expect} from "@playwright/test";
import {NavigationPage} from '../page-objects/navigationPage'
import {FormLayoutsPage} from "../page-objects/formLayoutsPage";
import {DatepickerPage} from "../page-objects/datepickerPage";


export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutsPage: FormLayoutsPage
    private readonly datePickerPage: DatepickerPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutsPage = new FormLayoutsPage(this.page)
        this.datePickerPage = new DatepickerPage(this.page)
    }

    get navigateTo(){
        return this.navigationPage
    }

    get onFormsLayoutsPage(){
        return this.formLayoutsPage
    }

    get onDatepickerPage(){
        return this.datePickerPage
    }
}