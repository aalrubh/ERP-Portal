
/*
    This file defines the structure of a sidebar item.
*/

export interface menuItem {
    title: string;
    icon?: string;
    isOpen?: boolean;
    route?: string;
    children?: menuItem[];
}

/*
    Title       (Mandatory) : The title of item, will be displayed in the sidebar
    Icon        (Optional)  : The icon that will set to the left of the item
    isOpen      (Optional)  : A boolean that will be used to open and close the sidebar
    Route       (Optional)  : A string that contains the pointed to path to be used by Router Module
    Children    (Optional)  : The sub-items of the parent item
*/
