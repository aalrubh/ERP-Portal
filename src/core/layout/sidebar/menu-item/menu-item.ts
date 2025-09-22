import { Component, input, forwardRef, EventEmitter, Output, effect, inject } from "@angular/core";
import { menuItem } from "./menu-item.interface";
import { NgClass } from "@angular/common";
import { Router } from "@angular/router";

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
    @Output() requestExpand = new EventEmitter();

    router = inject(Router);

    constructor() {
        effect(() => {
            if (this.collapsed()) {
                const i = this.item();
                if (i?.isOpen) i.isOpen = false;   // close on collapse
            }
        });
    }

    toggleMenuItem(item: menuItem): void {
        if (item.route) {
            this.router.navigate([item.route]);
        }

        if (!this.collapsed() && item.children?.length) {
            item.isOpen = !item.isOpen;
        }
        if (this.collapsed() && item.children?.length && !item.isOpen) {
            item.isOpen = true;
            this.requestExpand.emit();
        }
        if (this.collapsed()) {
            this.requestExpand.emit();
        }
    }
}