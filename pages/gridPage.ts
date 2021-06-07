import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get columnHeaderText() {
    return $$('[aria-rowindex="1"] > [role="columnheader"] [ref="agLabel"]');
  }
  
  public static get rightSideBarPrimaryColumnText() {
    return $$('div [ref="eTitleBar"] span[ref="eTitle"]');
  }
 
  public static get rightSideBarSecondryColumnText() {
    return $$('div[ref="eFilterToolPanelHeader"] span[ref="eFilterName"]');
  }
  
  public static get filtersButton() {
    return $('//button[contains(.,"Filters")]');
  }
  
  public static get monthlyBreakDown() {
    return $('//div[@ref="filtersToolPanelListPanel"]//span[contains(.,"Monthly Breakdown")]');
  }
  
  public static get monthOctoberLink() {
    return $('//span[@ref="eFilterName" and contains(.,"Oct")]');
  }


  
  public static get inputValueOfName() {
    return $("//input[@class='ag-floating-filter-input']");
  }

  public static get getRowCountValueInGrid() {
    return $$("//div[@role='row']//span[@ref='eCellValue']");
  }
  
 

}
