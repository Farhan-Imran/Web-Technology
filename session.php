
<?php
session_start();
?><html> <head></head>
<body>
<table align="right" border="1">
<tr>
<td colspan="5" style="width: 100%;"></td>
<td align="right" style="width: 10px;"><a href="">Home</a></td>
<td align="right" style="width: 10px;"><a href="">LogOut</a></td>
</tr>
</table>
<fieldset>
<center> <h1>Welcome! <?php echo $_SESSION['fullname']; ?> Have a nice day.</h1></center>
</fieldset>
<fieldset>
<b>DashBoeard:</b>
<table border="1">
<tr>
<td><a href="change_password.php">Change Password</a></td>
<td><a href="delivery_info.php">Delivery Info</a></td>
<td><a href="manage_account.php">Manage Customer</a></td>
<td><a href="addproduct.php"> Add Product</a></td>
<td><a href="showAllproducts.php"> Show all Products</a></td>
<td><a href="searchproduct.php"> Search Products</a></td>
</tr>
</table>
</fieldset>
</body>
</html>

