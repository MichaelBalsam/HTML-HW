"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Michael Balsam
   Date:   6/29/2020
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 
window.addEventListener("load",function (){
	calcCart();
	var cart = document.forms.cart;
	cart.elements.modelQty.onchange = calcCart;
	
var shippingOptions = document.querySelectorAll('input[name="shipping"]');
	for(var i = 0; i < shippingOptions.length; i++){
		shippingOptions[i].onclick = calcCart;
	}
});

function calcCart(){
	var cart = document.forms.cart;
	var machineCost = cart.elements.modelCost.value;
	var qIndex = cart.elements.modelQty.selectedIndex;
	var Qty = cart.elements.modelQty[qIndex].value;
	
	/*get orderCost*/
	var orderCost = machineCost * Qty;
	cart.elements.orderCost.value = formatUSCurrency(orderCost);
	
	/*get shipCost*/
	var shipCost = document.querySelector('input[name="shipping"]:checked').value*Qty;
	cart.elements.shippingCost.value = formatNumber(shipCost, 2);
	
	/*get subTotal*/
	cart.elements.subTotal.value = formatNumber((orderCost+shipCost), 2);
	
	/*get salesTax*/
	var salesTax = 0.05*(orderCost+shipCost);
	cart.elements.salesTax.value = formatNumber(salesTax, 2);
	
	/*get cartTotal*/
	cart.elements.cartTotal.value = formatUSCurrency(orderCost+shipCost+salesTax, 2);
	
	cart.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
}


function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
