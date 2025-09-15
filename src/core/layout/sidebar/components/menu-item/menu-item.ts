import { Component, input, signal, forwardRef } from "@angular/core";
import { menuItem } from "./menu-item.interface";
import { NgClass } from "@angular/common";


@Component({
    selector: 'portal-menu-item',
    standalone: true,
    imports: [NgClass, forwardRef(() => MenuItemComponent)],
    templateUrl: './menu-item.html',
    styleUrls: ['./menu-item.scss']
})
export class MenuItemComponent {
    item = input.required<menuItem>();
    collapsed = input.required<boolean>();

    nested_item_open = signal(false);

    toggleMenuItem(item: menuItem): void {
        if (item.children?.length) {
            item.isOpen = !item.isOpen;
        }
    }
}