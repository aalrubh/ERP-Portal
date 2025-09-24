
import { Directive } from '@angular/core';
import { Properties } from 'devextreme/ui/data_grid';

@Directive({
	selector: '[portalTablestyle]'
})

export class Tablestyle {
	
}

export const GRID_BASE_DEFAULTS: Partial<Properties> = {
  // identity
  keyExpr: 'id',

  // layout & density
  columnAutoWidth: true,
  columnMinWidth: 120,
  allowColumnResizing: true,
  allowColumnReordering: true,
  wordWrapEnabled: true,

  // interaction polish
  rowAlternationEnabled: true,
  hoverStateEnabled: true,
  showBorders: false,
  showColumnLines: false,
  showRowLines: false,

  // filtering / search / sort
  sorting: { mode: 'multiple' },
  filterRow: { visible: true, applyFilter: 'auto' },
  headerFilter: { visible: false },           // flip to true if you like menus
  searchPanel: { visible: true, width: 220, placeholder: 'Search…' },

  // paging
  paging: { pageSize: 25 },
  pager: { visible: true, showInfo: true, showPageSizeSelector: true, allowedPageSizes: [10, 25, 50] },

  // scrolling (choose based on dataset size)
  scrolling: { mode: 'standard' },
  repaintChangesOnly: true,

  // responsive
  columnHidingEnabled: true,
  columnFixing: { enabled: true },

  // misc UX
  noDataText: 'No records',
  loadPanel: { enabled: true },

  // turn on if backend supports it
  remoteOperations: false,

  // persistence (turn on in apps with stable keys)
  stateStoring: { enabled: false, type: 'localStorage', storageKey: 'grid:default:v1' },

  // selection (explicitly set if you use it)
  selection: { mode: 'none' },

  // styling hook (append via directive/wrapper)
  elementAttr: { class: 'app-grid density-compact' },
};

/*
	allowColumnReordering
	allowColumnResizing

	cellHintEnabled
	columnAutoWidth
	columnFixing
	columnHidingEnabled

	columnMinWidth
	columnResizingMode

	columns[]

	columnWidth
	customizeColumns
	dataRowTemplate
	dataSource
	dateSerializationFormat
	disabled
	editing
	elementAttr
	errorRowEnabled
	export
	filterBuilder
	filterBuilderPopup
	filterPanel
	filterRow
	filterSyncEnabled
	filterValue
	focusedColumnIndex
	focusedRowEnabled
	focusedRowIndex
	focusedRowKey
	grouping
	groupPanel
	headerFilter
	height
	highlightChanges
	hint
	hoverStateEnabled
	keyboardNavigation
	keyExpr
	loadPanel
	masterDetail
	noDataText
	onAdaptiveDetailRowPreparing
	onCellClick
	onCellDblClick
	onCellHoverChanged
	onCellPrepared
	onContentReady
	onContextMenuPreparing
	onDataErrorOccurred
	onDisposing
	onEditCanceled
	onEditCanceling
	onEditingStart
	onEditorPrepared
	onEditorPreparing
	onExporting
	onFocusedCellChanged
	onFocusedCellChanging
	onFocusedRowChanged
	onFocusedRowChanging
	onInitialized
	onInitNewRow
	onKeyDown
	onOptionChanged
	onRowClick
	onRowCollapsed
	onRowCollapsing
	onRowDblClick
	onRowExpanded
	onRowExpanding
	onRowInserted
	onRowInserting
	onRowPrepared
	onRowRemoved
	onRowRemoving
	onRowUpdated
	onRowUpdating
	onRowValidating
	onSaved
	onSaving
	onSelectionChanged
	onToolbarPreparing
	pager
	paging
	remoteOperations
	renderAsync
	repaintChangesOnly
	rowAlternationEnabled
	rowDragging
	rowTemplate
	rtlEnabled
	scrolling
	searchPanel
	selectedRowKeys
	selection
	selectionFilter
	showBorders
	showColumnHeaders
	showColumnLines
	showRowLines
	sortByGroupSummaryInfo[]
	sorting
	stateStoring
	summary
	syncLookupFilterValues
	tabIndex
	toolbar
	twoWayBindingEnabled
	visible
	width
	wordWrapEnabled
*/