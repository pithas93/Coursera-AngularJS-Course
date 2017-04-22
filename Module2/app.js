(function () {
'use strict';

angular
.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//To buy items
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var itemsToBuy = this;

	itemsToBuy.items = ShoppingListCheckOffService.getItems();

	itemsToBuy.clickBought = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
	}

};

//Already Bought Items
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var itemBought = this;
	itemBought.items = ShoppingListCheckOffService.getBougthItems();
};

// Shopping List Service
function ShoppingListCheckOffService(){
	var service = this;

	 var itemsToBuy = [
		{ name: "Cheese", quantity: 8},
		{ name: "Bacon", quantity: 15 },
		{ name: "Eggs", quantity: 3 },
		{ name: "Heavy Creams", quantity: 3 },
		{ name: "Spaggeti", quantity: 2}
	];

	var itemsBought = [];

	service.getItems = function(){
		return itemsToBuy;
	}

	service.getBougthItems = function(){
		return itemsBought;
	}

	service.buyItem = function buy(itemIndex){
		var item = itemsToBuy[itemIndex];
		itemsBought.push(item);
		itemsToBuy.splice(itemIndex,1);
	}
}

})();
