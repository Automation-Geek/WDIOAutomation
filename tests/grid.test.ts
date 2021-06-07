import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {

  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  
  }),

    it("Should display the grids Header Value", () => {
      GridPage.mainGrid.waitForDisplayed();
  
      /**
       * I'm using forEach here for readability purposes
       * The function iterates through the element array
       * and checks if element is displayed.
       */
      GridPage.columnHeader.forEach((el) => {
        expect(el.isDisplayed()).to.eql(true);
      });
   
    })


    it("Should display the grids Header Text Match the Expected Value", () => {
      var arr=["Participant","Game of Choice", "Performance","Monthly Breakdown"]
      
      GridPage.mainGrid.waitForDisplayed();
  
      /**
       * I'm using forEach here for readability purposes
       * The function iterates through the element Collection text and check the value
       * and checks if elemetn contains the value of function. 
       */

      GridPage.columnHeaderText.forEach((el) => {
        if (el.getText() !=''){
            expect(el.isDisplayed()).to.eql(true);
              expect(arr).to.include(el.getText())
        }
      })
    
    });


      it("Should display the Primary-Column Header ColumnSide Bar Values", () => {
        
        var arr=["Participant","Game of Choice", "Performance","Monthly Breakdown"]
        
        GridPage.mainGrid.waitForDisplayed();
    
        /**
         * I'm using forEach here for readability purposes
         * The function iterates through the element Collection text and check the value
         * and checks if elemetn contains the value of function. 
         */
  
        GridPage.rightSideBarPrimaryColumnText.forEach((el) => {
          if (el.getText() !=''){
              expect(el.isDisplayed()).to.eql(true);
                expect(arr).to.include(el.getText())
          }
        })
   
    });


    it("Should display the Secondry-Column Header Text in ColumnSide Bar Values", () => {
        
      var arr=["Name","Language","Country", "Game Name","Bought","Bank Balance","Rating","Total Winnings" ,"Extra Info 1","Extra Info 2","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      GridPage.mainGrid.waitForDisplayed();
  
      /**
       * I am verifying the FiltersButton exitence and click on this to value is getdisplay
       */
      expect(GridPage.filtersButton.isDisplayed()).to.eql(true);
      GridPage.filtersButton.click();

      /**
       * I'm using forEach here for readability purposes
       * The function iterates through the the value of Text in under Secondry Column Values
       * and checks if elemetn contains the value of function. 
       */
      GridPage.rightSideBarSecondryColumnText.forEach((el) => {
        if (el.getText() !=''){
             console.log("Values", el.getText())
             expect(el.isDisplayed()).to.eql(true);
              expect(arr).to.include(el.getText())
        }
      })
 
  });


  it("Should Filter Value get display in the Grid", () => {
        
    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the the value of Text in under Secondry Column Values
     * and checks if elemetn contains the value of function. 
     */
 
     GridPage.rightSideBarSecondryColumnText.setValue('test123')

 
  
      elem.clearValue()
      value = elem.getValue()
      
    })

});


})