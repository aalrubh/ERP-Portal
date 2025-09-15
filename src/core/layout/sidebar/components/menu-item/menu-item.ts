import { Component, input, signal, forwardRef } from "@angular/core";
import { menuItem } from "./menu-item.interface";
import { NgClass } from "@angular/common";
import { MatIconModule } from '@angular/material/icon'

@Component({
    selector: 'portal-menu-item',
    standalone: true,
    imports: [NgClass, forwardRef(() => MenuItemComponent), MatIconModule],
    templateUrl: './menu-item.html',
    styleUrls: ['./menu-item.scss']
})
export class MenuItemComponent {
    item = input.required<menuItem>();
    collapsed = input.required<boolean>();
    default : string = "";
    nested_item_open = signal(false);

    toggleMenuItem(item: menuItem): void {
        if (item.children?.length) {
            item.isOpen = !item.isOpen;
        }
    }
}