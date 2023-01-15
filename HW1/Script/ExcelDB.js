function excelOrder() {
  
  Project.Variables.ExcelData.Reset();
  
  TestedApps.Orders.Run(1, true);
  
   for(;!Project.Variables.ExcelData.IsEOF();) {
    let excel = Project.Variables.ExcelData.Value
    var name = excel("customerName")
    var street = excel("street")
    var city = excel("city")
    var state = excel("state")
    
      let orders = Aliases.Orders;
      orders.MainForm.ToolBar.ClickItem(4, false);
      let orderForm = orders.OrderForm;
      let groupBox = orderForm.Group;
      let textBox = groupBox.Customer;
      textBox.Click(45, 16);
      textBox.SetText(name);
      textBox = groupBox.Street;
      textBox.Click(99, 8);
      textBox.SetText(street);
      textBox = groupBox.City;
      textBox.Click(33, 7);
      textBox.SetText(city);
      textBox = groupBox.State;
      textBox.Click(66, 7);
      textBox.SetText(state);
      orderForm.Click(130, 15);
      orderForm.ButtonOK.ClickButton();
    
    Project.Variables.ExcelData.Next()
   }
   
   let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Click(278, 15);
  mainForm.Close();
  let dlgConfirmation = orders.dlgConfirmation;
  dlgConfirmation.Click(129, 11);
  dlgConfirmation.btnNo.ClickButton();
}