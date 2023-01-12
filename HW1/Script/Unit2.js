function addMainOrder()
{
  TestedApps.Orders.Run(1, true);
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.ToolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  groupBox.ProductNames.ClickItem("FamilyAlbum");
  groupBox.Quantity.wValue = 2;
  groupBox.Click(248, 90);
  groupBox.Date.wDate = "2005-03-06";
  let textBox = groupBox.Customer;
  textBox.Click(106, 6);
  textBox.SetText("Desmond Miles");
  textBox = groupBox.Street;
  textBox.Click(116, 12);
  textBox.Keys("![ReleaseLast]");
  textBox.SetText("Baker st");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("NY");
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("NY");
  textBox.Keys("[Tab]");
  groupBox.Zip.SetText("209");
  groupBox.AE.ClickButton();
  textBox = groupBox.CardNo;
  textBox.Click(84, 9);
  textBox.SetText("66654856");
  groupBox.ExpDate.wDate = "2005-03-06";
  orderForm.ButtonOK.ClickButton();
  mainForm.Click(289, 21);
  Tables.OrdersView.Check();
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
  
  // delete order
  mainForm.Click(227, 15);
  mainForm.OrdersView.ClickItem("Desmond Miles", 0);
  mainForm.ToolBar.ClickItem(6, false);
  orders.dlgConfirmation.btnYes.ClickButton();
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 0);
}