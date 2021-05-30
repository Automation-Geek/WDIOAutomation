import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Should Validate the AG Grid Data", () => {
  
  /** 
   * Open the Application 
  */
  before(() => {
    Page.open();
  });

  it("Should display the grids Header Value", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * The function iterates through the Column Header array and check it display Correct or not
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });

   
}),

it("Should display the grids Column Name Header", () => {
  GridPage.mainGrid.waitForDisplayed();

  /**
   * The function iterates through the Column Header Name and display correct or not
   */

  GridPage.colName.forEach((el) => {
    expect(el.isDisplayed()).to.eql(true);
  });


});

});
