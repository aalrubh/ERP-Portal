
/*
    Ths file will be used as a guide for the required items of sidebar items
*/

interface item {
    title: string;
    icon?: string;
    isOpen?: false;
    route?: string;

    children?: item[];
}

/*
    Title       (Mandatory) : The title of item, will be displayed in the sidebar
    Icon        (Optional)  : The icon that will set to the left of the item
    isOpen      (Optional)  : A boolean that will be used to open and close the sidebar
    Route       (Optional)  : A string that contains the pointed to path to be used by Router Module
    Childrem    (Optional)  : The sub-items of the parent item
*/