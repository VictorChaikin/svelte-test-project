////////////// Pivot Table ///////////////

Pivot Table Component 
Data-in       : Configurator, JSON data, columns
Data-in types : object, JSON, array of objects
Date-out : HeaderComponent, BodyComponent, FooterComponent
___________________________________________________________________________________
////////////// Header Component ///////////////

HeaderComponent
Data-in : RowsTitle, Columns, Vertical Total Value
Data-in types : 2D array, 2D array, 2D array
Data-out : RowsTitleComponent, ColumnsComponent, VerticalTotalValueComponent

RowsTitleComponent
Data-in : RowsTitleArray
Data-in types : 2D array
Data-out : Table header

ColumnsComponent
Data-in :  Columns default values, unique columns
Data-in types : 2D array, array of objects
Data-out : ColumnsDefaultComponent, UniqueColumnsComponent
*************************************************************
ColumnsDefaultComponent
Data-in :  Columns default values
Data-in types : 2D array
Data-out : Table header

UniqueColumnsComponent
Data-in : unique columns
Data-in types :array of objects
Data-out : Table header
*************************************************************

VerticalTotalValueComponent
Data-in : vertical total header
Data-in types : 2D array
Data-out : Table header
___________________________________________________________________________________
////////////// Body Component ///////////////

BodyComponent
Data-in : Unique Rows, Table Values, Rows Total Values
Data-in types : 2D array, 2D array, 2D array
Data-out : UniqueRowsComponent, TableValuesComponent, RowsTotalComponent 

UniqueRowsComponent
Data-in : unique rows
Data-in types : 2D array
Data-out : Table body

TableValuesComponent
Data-in : table values
Data-in types : 2D array
Data-out : Table body

RowsTotalComponent
Data-in : rows total
Data-in types : 2D array
Data-out : Table body
________________________________________________________________________________
////////////// Footer Component ///////////////

FooterComponent
Data-in : Horizontal total title, Columns total values, Grand Total
Data-in types : 2D array, 2D array, 2D array
Data-out : HorizontalTotalComponent, ColumnsTotalComponent, GrandTotalComponent

HorizontalTotalComponent
Data-in : horizontal total title
Data-in types : 2D array
Data-out : Table footer

ColumnsTotalComponent
Data-in : columns total
Data-in types : 2D array
Data-out : Table footer

GrandTotalComponent
Data-in : vertical total value
Data-in types : 2D array
Data-out : Table footer