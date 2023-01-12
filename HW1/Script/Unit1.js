function Test1()
{
  TestedApps.Orders.Run(1, true);
  let orders = Aliases.Orders;
  orders.MainForm.ToolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(45, 16);
  textBox.SetText("Ezio");
  textBox = groupBox.Street;
  textBox.Click(99, 8);
  textBox.SetText("some st av.");
  textBox = groupBox.City;
  textBox.Click(33, 7);
  textBox.SetText("firenze");
  textBox = groupBox.State;
  textBox.Click(66, 7);
  textBox.SetText("sda");
  textBox = groupBox.Zip;
  textBox.Click(59, 5);
  textBox.SetText("12456");
  textBox = groupBox.CardNo;
  textBox.Click(65, 2);
  textBox.SetText("24658765");
  groupBox.MasterCard.ClickButton();
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wItemCount", cmpEqual, 3);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  orderForm.Click(130, 15);
  orderForm.Click(208, 17);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "Enabled", cmpEqual, true);
  orderForm.Click(127, 18);
  orderForm.Click(245, 8);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "Ezio");
  orderForm.Click(208, 12);
  orderForm.Click(275, 16);
  orderForm.ButtonOK.ClickButton();
  TestedApps.Orders.Close();
}